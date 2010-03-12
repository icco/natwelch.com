<?php 

include('magpierss/rss_fetch.inc');

 $sites = array('http://www.cyberpunkreview.com/feed/','http://feeds.engadget.com/weblogsinc/engadget','http://www.animesuki.com/rss.php','http://www.techmeme.com/index.xml','http://www.hackaday.com/rss.xml','http://feeds.feedburner.com/designmeme','http://kacpy.blogsome.com/feed','http://feeds.feedburner.com/Mashable','http://feeds.feedburner.com/morethanseven','http://feeds.feedburner.com/geektechnique','http://www.ass-no-ryu.com/animeblog/?feed=atom','http://feeds.laughingsquid.com/laughingsquid','http://feeds.feedburner.com/MetrobloggingSF');

// Set error reporting for this
error_reporting(E_ERROR);


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


function readRSS($url, $class)
{
	$rss = fetch_rss($url);
	
	if ($rss)
	{	
		$mtitle = $rss->channel['title'];
		$mlink = $rss->channel['link'];
		echo "<div class='$class' > <ul><h2><a href='$mlink'>$mtitle</a></h2>";
		// Split the array to show first 5  
		$items = array_slice($rss->items, 0, 5);
		// Cycle through each item and echo  
		foreach ($items as $item )
		{
			//echo $rss;
			$href = $item['link'];
			$title = $item['title'];
			$desc = $item['description'];
			$time = time_since($item['date_timestamp']);
			echo "<li><a href=$href>$title</a> <br /> <small>$time</small></li>";
			//echo '<li><a href="'.$item['link'].'">'.$item['title'].'</a> - '.$item['description'].'</li>';
		}
		echo "</ul></div>";
	}
	else
	{
		echo '<h2>Error:</h2><p>'.magpie_error().'</p>';
	}
	// Restore original error reporting value
	@ini_restore('error_reporting');
}
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>NatWelch.com >> Nat's Little Startup Page</title>
<link href="rstyle.css" rel="stylesheet" type="text/css">
</head>
<body>



<p>
  <?php
foreach($sites as $key => $value) {
   //print "$key: $value<br>";
   if($key % 2 == '0'){
		readRSS($value, "box1");
		}
	else {
		readRSS($value, "box2");
		}
}
?> 
</p>
<p>&nbsp;</p>
</body>
</html>