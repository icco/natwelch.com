<?php

function get_iphone()
{
	$t = "<!-- The Next Meta is for iPhone... I think... -->\n";
	$t .= "<meta name=\"viewport\" content=\"width = 500\" />";
	
	return $t;
}

function getVersion()
{
	$version = 4;
	
	return $version;
}

/**
 * Parses a twitter stream and turns http:// and @ into links
 */
function twitterParse($in)
{
	$pieces = explode(" ", $in);
	
	foreach($pieces as &$word)
	{
		if($word[0] == "@")
		{
			$word = "<a href=\"http://twitter.com/" . ereg_replace("@","",$word) . "/\" >" . $word . "</a>";
		}
		else if($word[0] == "h")
		{
			$word = ereg_replace('([[:alpha:]]+://[^<>[:space:]]+[[:alnum:]/])', '<a target=\"_blank\" href="\\1">\\1</a>', $word);
		}
	}
	
	return implode(" ",$pieces);
}

?>
