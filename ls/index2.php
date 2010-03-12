<?php
// Include the SimplePie library
require_once('../PHP/simplepie.inc');
 
// Create a new SimplePie object
$feed = new SimplePie();
 
// Instead of only passing in one feed url, we'll pass in an array of three
$feed->set_feed_url(array(
							'http://twitter.com/statuses/user_timeline/3576561.atom',
							'http://pseudoweb.net/feed',
							'http://del.icio.us/rss/calvin166',
							'http://wordie.org/people/feed/icco?wl=8647',
							'http://api.flickr.com/services/feeds/photos_public.gne?id=42027916@N00&amp;lang=en-us&format=atom',
							'http://ws.audioscrobbler.com/1.0/user/icco/recenttracks.rss'
));
 
// We'll use favicon caching here (Optional)
$feed->set_favicon_handler('demo/handler_image.php');
 
// Initialize the feed object
$feed->init();
 
// This will work if all of the feeds accept the same settings.
$feed->handle_content_type();
 
// Begin our XHTML markup
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">	
<head>
	<title>Awesome feeds</title>
	<link rel="stylesheet" href="../demo/for_the_demo/simplepie.css" type="text/css" media="screen" charset="utf-8" />
 
	<style type="text/css">
	h4.title {
		/* We're going to add some space next to the titles so we can fit the 16x16 favicon image. */
		background-color:transparent;
		background-repeat:no-repeat;
		background-position:0 1px;
		padding-left:20px;
	}
	</style>
</head>
<body>
	<div id="site">
 
		<?php if ($feed->error): ?>
		<p><?php echo $feed->error; ?></p>
		<?php endif; ?>
 
		<h1>Awesome feeds</h1>
 
		<?php foreach ($feed->get_items() as $item): ?>
 
		<div class="chunk">
 
			<?php /* Here, we'll use the $item->get_feed() method to gain access to the parent feed-level data for the specified item. */ ?>
			<h4 class="title" style="background-image:url(<?php $feed = $item->get_feed(); echo $feed->get_favicon('./for_the_demo/alternate_favicon.png'); ?>);"><a href="<?php echo $item->get_permalink(); ?>"><?php echo $item->get_title(); ?></a></h4>
 
			<?php echo $item->get_content(); ?>
 
			<p class="footnote">Source: <a href="<?php $feed = $item->get_feed(); echo $feed->get_permalink(); ?>"><?php $feed = $item->get_feed(); echo $feed->get_title(); ?></a> | <?php echo $item->get_date('j M Y | g:i a T'); ?></p>
			
		</div>
 
		<?php endforeach; ?>
 
	</div>
</body>
</html>