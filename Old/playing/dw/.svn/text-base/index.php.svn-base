<? 
include ('../../../PHP/simplepie.inc');
//include ('../../../PHP/phpFlickr/auth.php');
require_once("../../../PHP/phpFlickr/phpFlickr.php");

$twit = new SimplePie('http://twitter.com/statuses/user_timeline/3576561.atom');
$blog = new SimplePie('http://pseudoweb.net/feed');
$links = new SimplePie('http://del.icio.us/rss/calvin166');


//Flickr Graber
$api_key = "7efc21b5b08233efb4e39f9d010c065c";
$api_secret = "072cb9c15f432b36";
$f = new phpFlickr($api_key, $api_secret);
$person = $f->people_findByUsername('Nat W');
$setid = '72157601200827657';

function time_since($original) {
    // array of time period chunks
    $chunks = array(
        array(60 * 60 * 24 * 365 , 'year'),
        array(60 * 60 * 24 * 30 , 'month'),
        array(60 * 60 * 24 * 7, 'week'),
        array(60 * 60 * 24 , 'day'),
        array(60 * 60 , 'hour'),
        array(60 , 'minute'),
    );
    
    $today = time(); /* Current unix time  */
    $since = $today - $original;
	
	if($since > 604800) {
		$print = date("M jS", $original);
	
		if($since > 31536000) {
				$print .= ", " . date("Y", $original);
			}

		return $print;

	}
    
    // $j saves performing the count function each time around the loop
    for ($i = 0, $j = count($chunks); $i < $j; $i++) {
        
        $seconds = $chunks[$i][0];
        $name = $chunks[$i][1];
        
        // finding the biggest chunk (if the chunk fits, break)
        if (($count = floor($since / $seconds)) != 0) {
            // DEBUG print "<!-- It's $name -->\n";
            break;
        }
    }

    $print = ($count == 1) ? '1 '.$name : "$count {$name}s";

    return $print . " ago";

}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Nat Welch @ Adobe</title>
<link href="style.css" rel="stylesheet" type="text/css" />
<!--[if IE]>
<style type="text/css"> 
/* place css fixes for all versions of IE in this conditional comment */
.twoColElsRt #sidebar1 { padding-top: 30px; }
.twoColElsRt #mainContent { zoom: 1; padding-top: 15px; }
/* the above proprietary zoom property gives IE the hasLayout it needs to avoid several bugs */
</style>
<![endif]-->
<script src="../../SpryAssets/SpryTabbedPanels.js" type="text/javascript"></script>
</head>
<body class="twoColElsRt">
<div id="container">
  <div class="sidecont">
    <div id="apDiv1"><a href="http://natwelch.com/"><img src="../../../images/moi.jpg" alt="Nat" name="Me" width="150" height="150" id="Me" style="" /></a></div>
    <div id="apDiv2">Nat Says...
      <?php $text = $twit->get_item(0)->get_description(); 
	  echo substr($text, strpos($text, ':') + 2) ?>
      <a href="<?php echo $twit->get_item(0)->get_permalink(); ?>" target="_blank"><?php echo time_since($twit->get_item(0)->get_date('U')); ?></a></div>
    <div id="apDiv3"><br />
    </div>
  </div>
  <div id="header">
    <h1>
      <!-- This clearing element should immediately follow the #mainContent div in order to force the #container div to contain all child floats -->
      Nat Welch</h1>
    <div class="description">&raquo; Adobe Dreamweaver QE Intern</div>
  </div>
  <div id="mainContent">
    <p><span class="dropcap">M</span>
    y name is Nathaniel Welch. Iam a student from the <a href="http://calpoly.edu" title="Cal Poly's Website">California Polytechnic State University in San Luis Obispo</a> (aka Cal Poly SLO). I have a passion for learning about new technologies and how technology is used to connect people around the world. I am also a big fan of Design, Photography, Short Stories, and Science Fiction. In my free time I hike, bike, write, and program.</p>
    <p>While at Adobe I have been testing the Dreamweaver product against Apple's new OS, Leopard. If you have any questions, feel free to ask. </p>
    <div id="DynamicStuff" class="TabbedPanels">
      <ul class="TabbedPanelsTabGroup">
        <li class="TabbedPanelsTab" tabindex="0">Blog</li>
        <li class="TabbedPanelsTab" tabindex="0">Del.icio.us</li>
        <li class="TabbedPanelsTab" tabindex="0">Flickr</li>
        <li class="TabbedPanelsTab" tabindex="0">LibraryThing</li>
      </ul>
      <div class="TabbedPanelsContentGroup">
        <div class="TabbedPanelsContent">
          <p>My Most Recent Blog Posts</p>
          <ul>
            <?php foreach ($blog->get_items() as $item): ?>
            <li><a href="<?php echo $item->get_permalink(); ?>"><?php echo $item->get_title(); ?></a><small><?php echo time_since($item->get_date('U')); ?></small></li>
            <?php endforeach; ?>
          </ul>
        </div>
        <div class="TabbedPanelsContent">
          <p>Del.icio.us Links</p>
          <ul>
            <?php foreach ($links->get_items(0,5) as $item): ?>
            <li><a href="<?php echo $item->get_permalink(); ?>"><?php echo $item->get_title(); ?></a><small><?php echo time_since($item->get_date('U')); ?></small></li>
            <?php endforeach; ?>
          </ul>
        </div>
        <div class="TabbedPanelsContent">
          <p>Flickr Photos</p>
          <?php 
		$photos_mine = $f->photos_search(array("user_id"=>$person['id'], "sort"=>"recent-desc", "per_page"=>24));
		foreach ((array)$photos_mine['photo'] as $photo) {
			// Build image and link tags for each photo
			echo "<a href=http://www.flickr.com/photos/$photo[owner]/$photo[id]>";
			echo "<img border='0' alt='$photo[title]' ".
				"src=" . $f->buildPhotoURL($photo, "Square") . ">";
			echo "</a>";
		}
		/*
		if (!empty($person)) {

			// Get the user's $rowphotocount*$rows public photos
			$photos = $f->photosets_getPhotos($setid, NULL, NULL, NULL, 16, NULL);
			// Alternate to above line... $photos = $f->photosets_getPhotos($setid, NULL, NULL, NULL, $totalphotos, NULL);
			
			// Loop through the photos and output the html
			foreach ($photos['photo'] as $photo) {
				echo "<a href=$photos_url$photo[id]>";
				echo "<img border='0' alt='$photo[title]' title='$photo[title]' ".
				"src=" . $f->buildPhotoURL($photo, "Square") . ">";
				echo "</a>";
			}
		}*/


		
		?>
        </div>
        <div class="TabbedPanelsContent">
          <script language="javascript" type="text/javascript" src="http://www.librarything.com/jswidget.php?reporton=icco&show=random&header=1&num=4&covers=small&text=all&tag=alltags&amazonassoc=pseudoweb-20&css=1&style=1&version=1">
        </script>
        </div>
      </div>
    </div>
  </div>
  <p><br class="clearfloat" />
  </p>
  <!-- end #container -->
</div>
<script type="text/javascript">
<!--
var TabbedPanels1 = new Spry.Widget.TabbedPanels("DynamicStuff", {defaultTab:2});
//-->
</script>
</body>
</html>
