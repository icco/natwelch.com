<?php
// "Most recently listened-to" Audioscrobbler/Last.fm RSS feed parser
// Converts the feed into a definition list

// Written by David of fuddland.org.uk 2005/09/26
// Originally posted at
// http://fuddland.org.uk/archives/2005/09/26/last_fm_feed_parser.php

// Last modified 2005/09/26

// Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 2.0
// http://creativecommons.org/licenses/by-nc-sa/2.0/


// *************************************************************
// SETTINGS
// *************************************************************

// Your Audioscrobbler username
$userName = icco;

// Path to Magpie RSS Parser
$magpiePath = "magpierss";

// Set the location of the cached feed
$magpieCachePath = "magpierss/cache";

// Cache the RSS feed for how many minutes?
$cacheFor = 10;

// Uncomment this next line to debug
// define('MAGPIE_DEBUG',1);

// *************************************************************
// *************************************************************
// DON'T EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING
// *************************************************************
// *************************************************************

// This function removes leading and trailing spaces and newlines
// Probably not strictly needed but I like to make sure things are tidy :)
function cleanup($string){
$cleaned_text = preg_replace("/^\s/", "", $string);
$cleaned_text = preg_replace("/\s$/", "", $cleaned_text);
$cleaned_text = preg_replace("/\n$/s", "", $cleaned_text);
return $cleaned_text;
} // End of cleanup function

// Load Magpie's RSS fetching functions
define(MAGPIE_CACHE_FRESH_ONLY, false);
define(MAGPIE_DETECT_ENCODING, true);
define(MAGPIE_DEBUG, 0);
define(MAGPIE_FETCH_TIME_OUT, 15);
define(MAGPIE_USE_GZIP, true);   
define('MAGPIE_CACHE_ON',1);
define('MAGPIE_CACHE_DIR', $magpieCachePath);
$cacheFor = $cacheFor*60;
define('MAGPIE_CACHE_AGE', $cacheFor);
require_once $magpiePath . "/rss_fetch.inc";

if (!is_writable($magpieCachePath)) {
	echo "<p><strong>Error:</strong> The MagpieRSS cache directory is not writable.</p>";
	}
elseif (!$feed = fetch_rss("http://ws.audioscrobbler.com/1.0/user/$userName/recenttracks.rss")) {
	echo "<p>Sorry, I couldn't fetch the Audioscrobbler RSS feed. Please try again later.</p>";
}
else {
	if (!$items = array_slice($feed->items, 0)) {
		echo "<p>No songs played in the recent past.</p>";
	}
	else {
		echo "<dl>\n";
	
		foreach ($items as $item) {
	
			$songlink = $item['link'];
			$artistitle = explode(" - ", $item['title']);
			$artist = $artistitle[0];
			$title = $artistitle[1];
	
			// Clean-up text
			$artist = cleanup($artist);
			$title = cleanup($title);
	
			if ($title != "") {
				echo "\t\t<dt><a href=\"$songlink\" title=\"Last.fm info page for '$title'\">$title</a></dt>\n";
			} else {
				echo "\t\t<dt>Unknown song title</dt>\n";
			}
	
			if ($artist != "") {
				echo "\t<dd><strong>$artist</strong></dd>\n";
			} else {
				echo "\t<dd>Unknown artist</dd>\n";
			}
	
			} // foreach ($items as $item)
	
		echo "</dl>\n";
	}
}

?>