<?php

define('OBSF_JSPATH', 'obsf.js'); // change me
define('OBSF_DELIM', '___OBSF___');
define('OBSF_IDENT_SCRIPT', '___SCRIPT___');
    
/**
 * Stores HTML in the session and forces a secondary request via JavaScript to obtain it.
 *
 * This script doesn't really obfuscate HTML, but it will replace scripts intended to do so.
 * Instead it works by storing the input temporarily on the server, and using a client-side
 * script to fetch it separately. It returns a SPAN element for each input, which is filled by a
 * JavaScript function when the rest of the page has finished loading.
 *
 * 2005/9/30:
 *   Added support for input containing JavaScript elements and onload events. External scripts
 *   in other languages are also supported, but inline scripts are always evaluated as JavaScript.
 *
 * @param    in
 *   The data to store
 * @param    mailto
 *   Make this a mailto: link
 * @return
 *   The resulting HTML
 * @author
 *   Arpad Ray
 * @version
 *   2005/9/30
 */
function obfuscate_ajax($in, $mailto = false)
{
    $key = md5(uniqid(rand(), 1));
    $out = '<span class="_obsf" id="' . $key . "\"></span>\n";
    if (!isset($GLOBALS['_obsf_page'])) {
        $out .= '<script type="text/javascript" src="' . OBSF_JSPATH .'"></script>';
        $GLOBALS['_obsf_page'] = 1;
    }
    if (!isset($_SESSION['_obsf'])) {
        $_SESSION['_obsf'] = array();
    }
    $GLOBALS['_obsf_script_key'] = 0;
    $GLOBALS['_obsf_current'] = $key;
    $js_pattern = '#<script(?:\s*(\w+)=["\']?(.+?)["\']?)*\s*>(.+?)</script>#is';
    $in = preg_replace_callback($js_pattern, '_obsf_register_script', $in);
    $onload_pattern = '#<(.+?)onload=(["\']?)(.+?)\\2(.*?)>#is';
    $in = preg_replace_callback($onload_pattern, '_obsf_register_onload', $in);
    $_SESSION['_obsf'][$key] = ($mailto ? "<a href='mailto:$in'>$in</a>" : $in);
    return $out;
}

function _obsf_register_script($matches)
{
    $count = count($matches);
    $cont = end($matches);
    $cont = preg_replace('/document\.write\((.*?)\)/is',
        'document.getElementById("' . $GLOBALS['_obsf_current'] . '").innerHTML+=$1', $cont);
    $catts = array();
    for ($j = 1; $j + 2 < $count; $j += 2) {
        $catts[$matches[$j]] = $matches[$j + 1];
    }
    $_SESSION['_obsf_scripts'][$GLOBALS['_obsf_current']][] = array($cont, $catts);
    return  OBSF_DELIM . OBSF_IDENT_SCRIPT . $GLOBALS['_obsf_script_key']++ . OBSF_DELIM;

}

function _obsf_register_onload($matches)
{
    $onload = $matches[3];
    $rem = $matches[1] . $matches[4];
    if (!preg_match('/\bid=["\']?(.+?)["\']?/i', $rem, $idm)) {
        $id = md5(uniqid(rand(), 1));
        $rem .= ' id="' . $id . '"';
    } else {
        $id = $idm[1];
    }
    $rem = '<' . $rem . '>';
    $onload = strtr($onload, array('this.' => 'document.getElementById("' . $id . '").'));
    $rem = $rem . _obsf_register_script(array($onload));
    return $rem;
}

?>
