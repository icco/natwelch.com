<?php

session_start();    
if (!isset($_POST['_obsf'], $_SESSION['_obsf']) || !is_array($keys = explode(',', $_POST['_obsf']))) {
    exit;    
}

$out = 'var obr = new Array();';
foreach ($keys as $key) {
    if (isset($_SESSION['_obsf'][$key])) {
        $out .=  'obr["' .$key . '"] = ["' . rawurlencode($_SESSION['_obsf'][$key]) . '"';
        if (isset($_SESSION['_obsf_scripts'][$key])) {
            $out .= ',"' . rawurlencode(serialize($_SESSION['_obsf_scripts'][$key])) . '"';
            unset($_SESSION['_obsf_scripts'][$key]);
        }
        $out .= '];';
        unset($_SESSION['_obsf'][$key]);
    }
}
echo $out;

?>
