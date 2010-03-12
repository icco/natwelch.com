<?php
// PHP Code for the merging of multiple streams using SimplePie
require_once('../PHP/simplepie.inc');
 
// Create Feeds
$twitter = new SimplePie('http://twitter.com/statuses/user_timeline/3576561.atom');
$twitter->enable_cache(false);
$twitter->init();

$Pw = new SimplePie('http://pseudoweb.net/feed');
$Pw->enable_cache(false);
$Pw->init();

$delicious = new SimplePie('http://del.icio.us/rss/calvin166');
$delicious->enable_cache(false);
$delicious->init();

$wordie = new SimplePie('http://wordie.org/people/feed/icco?wl=8647');
$wordie->enable_cache(false);
$wordie->init();

$flickr = new SimplePie('http://api.flickr.com/services/feeds/photos_public.gne?id=42027916@N00&lang=en-us&format=rss_200');
$flickr->enable_cache(false);
$flickr->init();

$lastfm = new SimplePie('http://ws.audioscrobbler.com/1.0/user/icco/recenttracks.rss');
$lastfm->enable_cache(false);
$lastfm->init();

$upcoming = new SimplePie('http://upcoming.yahoo.com/syndicate/v2/my_events/74606');
$upcoming->enable_cache(false);
$upcoming->init();

$pownce = new SimplePie('http://pownce.com/feeds/public/icco/');
$pownce->enable_cache(false);
$pownce->init();

$gshared = new SimplePie('http://www.google.com/reader/public/atom/user/03039824401098534155/state/com.google/broadcast');

///Mergation!
$merged = SimplePie::merge_items(array($pownce, $twitter, $Pw, $delicious, $wordie, $flickr, $lastfm, $upcoming, $gshared));
 
header('Content-type:text/html; charset=utf-8');
 
date_default_timezone_set('America/Los_Angeles');
 
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">	
<head>
	<title>NatWelch.com &gt; Alt LifeStream</title>
    
	<script src="http://simile.mit.edu/timeline/api/timeline-api.js" type="text/javascript"></script>
    <script src="timeline.js" type="text/javascript"></script>
	
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" charset="utf-8" /> 
    <?php //<link rel="stylesheet" href="../style.css" type="text/css" media="screen"  /> ?>
	
</head>
<body onload="onLoad();" onresize="onResize();">
<div id="everything">
<div ID="Timeline"></div>
	<div class="all">
    <div class="quote">
	<div id="all">
 		<ul>
        <li class="header">
		<h1>Nat's LifeStream</h1>
        This is a congregation of some of the digital shards of me scattered across the web. Thanks to web2.0 and all of it's dynamic goodness, I can present it all here for you, and me. This feed currently contains updates from my <a href="http://twitter.com/icco">Twitter</a>, <a href="http://pownce.com/icco">Pownce</a>, <a href="http://www.last.fm/user/icco">Last.FM</a>, <a href="http://del.icio.us/calvin166">Del.icio.us</a>, <a href="http://upcoming.yahoo.com/user/74606/">Upcoming</a>, <a href="http://wordie.org/people/profile/icco">Wordie</a>, and <a href="http://pseudoweb.net">my Blog</a>.        </li>
 		
		<?php foreach ($merged as $item): ?>
 			<li>
 			<a href="<?php echo $item->get_permalink(); ?>" title="Posted to <?php $feed = $item->get_feed(); echo $feed->get_title(); ?> on <?php echo $item->get_date("D M j G:i:s T Y"); ?> ">
     			
             <img src="<?php $feed = $item->get_feed(); echo $feed->get_favicon('demo/for_the_demo/favicons/alternate.png'); ?>" class="favicon" alt=" " />

			<?php echo $item->get_title(); ?> @ <?php echo $item->get_date(' U'); ?> 			</a></li>
		<?php endforeach; ?>
 		
        <li></li>
        </ul>
	</div>
    </div></div>
    
</div>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-333449-2";
urchinTracker();
</script>
</body>
</html>