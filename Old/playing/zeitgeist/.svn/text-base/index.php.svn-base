<?php
include_once('simplepie.inc');
include('config.inc');

?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
<title><?php echo $fullname; ?> :: Personal Zeitgeist</title>
<link rel="stylesheet" href="style.css" type="text/css" media="screen" charset="utf-8" />

</head>

<body>


<div id="site">

	<div id="header">
		<img src="images/face.png"/><span><h1><? echo $fullname; ?></h1><br/><? echo $description; ?><br/></span>
		<div style="clear:both;"></div>		
	</div>
	
	<div id="content">
		
		<div id="blogposts">
			<?php
			$combinedfeed = array();

			foreach($blogfeeds as $url) {

				$feed = new SimplePie();
				$feed->feed_url($url);
				$feed->replace_headers(true);
				$feed->strip_htmltags(array('img', 'a', 'object', 'embed', 'param', 'iframe', 'p', 'br', 'div', 'span', 'li', 'ul'));
				$feed->output_encoding('ISO-8859-1');

				$feed->init();

				foreach ($feed->get_items(0, $zeitlength) as $item) {

					$data = '';
					$data .= $item->get_date('U') . ':::::';
					$data .= gmdate('M j', $item->get_date('U')) . ':::::';
					$data .= $item->get_title() . ':::::';
					$data .= $item->get_permalink() . ':::::';
					$data .= $item->get_description() . ':::::';
					$data .= $feed->get_feed_title() . ':::::';
					$data .= $feed->get_feed_link();

					$combinedfeed[] = $data;
				}
				unset($feed);
			}

			rsort($combinedfeed);
			?>
			
			<h3 class="title">What I'm saying:</h3>
			<?php
			for ($x = 0; $x < $zeitlength-1; $x++) {
				$posting = $combinedfeed[$x];
				$data = explode(':::::', $posting);
			?>
			<div class="postbox">
				<blockquote>
					<p>
						<h4 class="blogtitle"><?php echo '<a href="' . $data[3] . '">'; echo $data[2];  echo '</a>'; ?></h4> ::
								&ldquo;<?php echo substr($data[4], 0, 300); ?> ...&rdquo; <a href="<?php echo $data[6]; ?>"><?php echo $data[5]; ?></a> | <strong> <?php echo $data[1]; ?></strong>
					</p>
				</blockquote>
			</div>

			<?php } ?>
		</div>
						
		<div id="info-box">
			<?php if($usetwitter) {?>Twitter: <br/><?php } ?>
			You can contact me at <a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a><br/>
			This page is aggregated from: 
			
			<?php for($x = 0; $x < count($blognames); $x++) {
				echo '<a href="' . $blogfeeds[$x] . '">' . $blognames[$x] . '</a>, ';
			}?>
		</div>
		
		<div id="imagefeed">
			<span class="smalltitle">What I'm seeing:</span>
			<?php $imagefeed = new SimplePie();
				  $imagefeed->feed_url($imagefeedurl); 
				  $imagefeed->output_encoding('ISO-8859-1');
				  $imagefeed->init(); ?>
			
			<?php if ($imagefeed->data): ?>

				<?php foreach($imagefeed->get_items(0,$zeitlength) as $item): ?>
				<div class="imagebox">				
					<?php 
					  $image = $item->get_description(); $image = substr($image,strpos($image,'<img')+13);
					  $image = trim(substr($image,0,strpos($image,"\" width"))); $healthy = array("%3A", "%2F");
					  $yummy  = array(":", "/"); $image = str_replace($healthy, $yummy, $image);  
					  $imagetn = str_replace("m.jpg", "s.jpg", $image);  
					  echo "<img src=\"htt".$imagetn."\" alt=\"".$item->get_title()."\" />"; 
					?>					
				</div>
				<?php endforeach; ?>
			<?php endif; ?>
		</div>

		<div id="alertfeed" >
			<span class="smalltitle">What they're saying:</span>
			<?php $alertfeed = new SimplePie();
		  		  $alertfeed->feed_url('http://feeds.technorati.com/search/%22' . str_replace(" ", "+", $fullname) . '%22'); 
				  $alertfeed->strip_htmltags(array('img', 'a', 'object', 'p', 'br', 'div', 'span', 'li', 'ul'));
				  $alertfeed->output_encoding('ISO-8859-1');
				  $alertfeed->init(); ?>
			
			<?php if ($alertfeed->data): ?>
				<?php foreach($alertfeed->get_items(0,$zeitlength-1) as $item): ?>
				<div class="plainpostbox">
						<blockquote>
							<p>
								<h4 class="feedtitle"><?php if ($item->get_permalink()) echo '<a href="' . $item->get_permalink() . '">'; echo $item->get_title(); 
								if ($item->get_permalink()) echo '</a>';?></h4> ::
								&ldquo;<?php echo substr($item->get_description(), 0, 100); ?> ...&rdquo; 
								<span class="smalltitle"> <?php echo $item->get_date('M j'); ?></span>
							</p>
						</blockquote>
				</div>
				<?php endforeach; ?>
			<?php endif; ?>
		</div>

		<div style="clear:both;"></div>
			
		<div id="bookmarks">
			<?php 
			$combinedmarks = array();

			foreach($bookmarkfeeds as $url) {

				$feed = new SimplePie();
				$feed->feed_url($url);
				$feed->replace_headers(true);
				$feed->strip_htmltags(array('img', 'a', 'object', 'embed', 'param', 'iframe', 'p', 'br', 'div', 'span', 'li', 'ul'));

				$feed->init();

				foreach ($feed->get_items(0, 50) as $item) {

					$data = '';
					$data .= $item->get_date('U') . ':::::';
					$data .= gmdate('M j Y', $item->get_date('U')) . ':::::';
					$data .= $item->get_title() . ':::::';
					$data .= $item->get_permalink() . ':::::';
					$data .= $item->get_description() . ':::::';
					$data .= $feed->get_feed_title() . ':::::';
					$data .= $feed->get_feed_link();

					$combinedmarks[] = $data;
				}
				unset($feed);
			}

			rsort($combinedmarks);
			?>
			
			<ul><h4 class="feedtitle">What I'm reading: </h4> 
				<?php
				for ($x = 0; $x < $zeitlength*2; $x++) {
					$bookmark = $combinedmarks[$x];
					$data = explode(':::::', $bookmark);
				?>
				<li><span class="bookmark"><?php echo '<a href="' . $data[3] . '">'; echo $data[2];  echo '</a>'; ?></span></li>
			<?php } ?>
			</ul>
				
			<div style="clear:both"></div>
		</div>
			
	</div>

	<div id="footer">This is a <a href="">Personal Zeitgeist</a>, and it is a product of <a href="">Creative Synthesis</a>.</div>

</div>
</body>
</html>
