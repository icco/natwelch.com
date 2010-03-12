<?php

/**
 * Obfuscates a string with a simple javascript
 *
 * @param    in
 *   The input string
 * @param    link
 *   False to skip, True to make a link to the input, anything else to make
 *   a link with this argument as the href, and the input as the link text.
 * @param    max
 *   The maximum number size (-max to max)
 * @return
 *   The resulting HTML
 * @author
 *   Arpad Ray
 * @version
 *   2005/10/21
 */
function obfuscate($in, $link = false, $max = 10000)
{
	$rep = "(isset(\\\$ra) ? ',' : '') . (\\\$ra = rand(-1 * $max, $max)) . '+' . (ord(substr('\\0', -1)) - \\\$ra)";
	$in = preg_replace('/./se', $rep, ($link !== false ? '<a href="' . ($link === true ? $in : $link) . '">' . $in . '</a>' : $in));
	return "<script type='text/javascript'><!--\ndocument.write(String.fromCharCode($in));\n//--></script><noscript>This information requires JavaScript to view. Sorry.</noscript>";
}

?> 
