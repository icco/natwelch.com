<? 
// PHP Code for the merging of multiple streams through SimplePie
require_once('PHP/simplepie.inc');
 
// Create Feeds
$twitter = new SimplePie('http://twitter.com/statuses/user_timeline/3576561.atom');
$Pw = new SimplePie('http://pseudoweb.net/feed');
$delicious = new SimplePie('http://del.icio.us/rss/calvin166');
$wordie = new SimplePie('http://wordie.org/people/feed/icco?wl=8647');
$flickr = new SimplePie('http://api.flickr.com/services/feeds/photos_public.gne?id=42027916@N00&lang=en-us&format=rss_200');
$lastfm = new SimplePie('http://ws.audioscrobbler.com/1.0/user/icco/recenttracks.rss');
$upcoming = new SimplePie('http://upcoming.yahoo.com/syndicate/v2/my_events/74606');
$pownce = new SimplePie('http://pownce.com/feeds/public/icco/');

///Mergation!
$merged = SimplePie::merge_items(array($pownce, $twitter, $Pw, $delicious, $wordie, $flickr, $lastfm, $upcoming));
 
header('Content-type:text/html; charset=utf-8');
 
date_default_timezone_set('America/Los_Angeles');
 ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="Description" content="The Life Stream of Nat Welch" />
<meta name="Keywords" content="Nat, welch, natwelch, nathaniel, nathanielwelch, dehn, Lifestream, stream, twitter, pownce, last.fm, del.icio.us" />
<title>nat welch dot com &gt; LifeStream</title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body style="font-family: Georgia, 'Times New Roman', Times, serif !important;">
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-333449-2";
urchinTracker();
</script>
<div class="all">
		<div class="quote">
			<div class="header"><a href="http://natwelch.com" title="About Me">Home</a> | <a href="code.php">Projects</a> | <a href="http://pseudoweb.net"  >Blog</a> | <a href="http://flickr.com/photos/icco" title="Photos"  >Photos</a> | <a href="resume.pdf" title="Resume in PDF form"   onclick="javascript:urchinTracker ('/resume')">Resume<font size="-4">(PDF)</font></a> </p>
		</div>
		
		<div class="quote">
        <p>Nat's Life Stream</p>
        <p>This is a general collection of many of the random fragments of my digital soul scattered across the Web. By no means is this anything more than a work in progress.
        </div>
        <div class="quote">
        <ul class="ls">
        
        <!-- Begin LifeStream-->
        <?php foreach ($merged as $item): ?>
 			<li class="entry">
                <a href="<?php echo $item->get_permalink(); ?>" title="Posted to <?php $feed = $item->get_feed(); echo $feed->get_title(); ?> on <?php $item->get_date("D M j G:i:s T Y"); ?> ">
                    
                 	<img src="<?php $feed = $item->get_feed(); echo $feed->get_favicon('ls/demo/for_the_demo/favicons/alternate.png'); ?>" class="favicon" alt=" " />
    
                    <?php echo $item->get_title(); ?> @ <?php echo $item->get_date(' U'); ?>
                </a>
            </li>
		<?php endforeach; ?>
	
			</ul>
		</div>
        
        
        
        <!-- FOOTER BEGIN -->
		<div class="footer">
          <a href="http://validator-test.w3.org/check?uri=referer"><img src="images/valid_xhtml11_80x15_2.png" alt="Valid XHTML 1.0!" width="80" height="15" border="0"/></a>
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/">
        <img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/us/80x15.png" /></a>
         <a href="http://jigsaw.w3.org/css-validator/validator?uri=http://natwelch.com"><img src="images/valid_css_80x15_2.png" border="0" alt="Valid CSS" /></a>
         </div><!-- End FOOTER -->
 </div>
</body>
</html>
