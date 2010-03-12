<?php 
include 'PHP/simplepie.inc'; // for RSS feeds
include 'PHP/obfuscate.php'; // for javascripting my phone number and email
include 'PHP/age.php'; //age() and time_since()
include "PHP/v3.generics.php"; 

//Twitter Code... Not working atm
$twit = new SimplePie();
$twit->set_feed_url('http://twitter.com/statuses/user_timeline/icco.atom?page=1');
$twit->set_cache_duration(18000);
$twit->init();
$twit->handle_content_type();
$item = $twit->get_item(0);

if($item && !$twit->error()) 
{	
	$text = $item->get_description();
	$text = twitterParse(substr($text, strpos($text, ':') + 2));   
	$twitprint = $text . " <a href=\"" . $item->get_permalink() . "\" target=\"_blank\">" . time_since($item->get_date('U')) . "</a> ";
}
else
{
	$twitprint = "Twitter seems to be down at the moment...";
}

?>
<html>
<head>
<title>Testing...</title>
<link type="text/css" rel="stylesheet" href="includes/css/SyntaxHighlighter.css"></link>
<script language="javascript" src="includes/js/syntax/shCore.js"></script>
<script language="javascript" src="includes/js/syntax/shBrushPhp.js"></script>
<script language="javascript">
dp.SyntaxHighlighter.ClipboardSwf = 'js/syntax/clipboard.swf';
dp.SyntaxHighlighter.HighlightAll('code,true,true,true,true,true');
</script>
</head>
<body>
<pre>
<a href="http://twitter.com/icco" title="my twitter page" target="_blank" rel="me">My Twitter Status</a>: <?php print $twitprint; ?></div>
      </pre>
      
    <pre name="code" class="php">
&lt;?php
/**
Used to convert plain text to html.
@author Nat Welch
*/
function htmlify($str)
{
	// replace special characters with HTML entities
	$html = htmlspecialchars($str);
	
	//paragraph-ise
	$html = "&lt;p&gt;" . str_replace("\n\n", "&lt;/p&gt;\n&lt;p&gt;", $html) . "&lt;/p&gt;";

	// replace multiple spaces with single spaces
	$html = preg_replace('/\s\s+/', ' ', $html);

	// replace URLs with link elements
	$html = preg_replace('/\s(\w+:\/\/)(\S+)/', ' &gt;a href="\\1\\2" title="\\2"&gt;\\1\\2&lt;/a&gt;', $html);
	
	return $html;
}
?&gt;
</pre></div>
</body></html>