<? 
include("header.php");
include ('PHP/simplepie.inc');

$twit = new SimplePie('http://twitter.com/statuses/user_timeline/icco.atom');
$blog = new SimplePie('http://pseudoweb.net/feed');


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
<?php NatHead(""); ?>
  <div class="quote">
    <!--&quot;Why, Mr. Anderson? Why, why, why? Why do you do it? Why, why get up? Why keep fighting? Do you believe you're fighting for something, for more than your survival? Can you tell me what it is, do you even know? Is it freedom, or truth, perhaps peace, could it be for love? Illusions, Mr. Anderson, vagaries of perception. Temporary constructs of a feeble human intellect trying desperately to justify an existence that is without meaning or purpose! And all of them as artificial as the matrix itself, although only a human mind could invent something as insipid as love. You must be able to see it Mr. Anderson, you must know it by now. You can't win, it's pointless to keep fighting! Why, Mr. Anderson, why? Why do you persist?&quot; - Agent Smith -->
    <a href="http://flickr.com/photos/icco/413365678/"><img src="images/natlookingatyou.png" width="375" alt="It's a big picture of Nat, what more did you expect?" title="It's a big picture of Nat, what more did you expect?(FLICKR LINK)"/></a> </div>
  <div class="quote lighter">
    <p>My name is Nathaniel Welch, you can call me Nat. I am a Computer Science major at the <a href="http://calpoly.edu" title="Cal Poly's Website">California Polytechnic State University in San Luis Obispo</a>, more affectionately known as Cal Poly SLO. Along side my major, I am working to obtain a minor in English.</p>
    <p>My interests include <a href="http://en.wikipedia.org/wiki/Communication">communication</a>, <a href="http://en.wikipedia.org/wiki/Design">design</a>, and <a href="http://en.wikipedia.org/wiki/Portal:Technology">technology</a>. I am also a self proclaimed <a href="http://en.wikipedia.org/wiki/Infornography">Infornographer</a> and have been known to suffer greatly from <acronym title="Nerd Attention Deficiency Disorder"> <a href="http://www.randsinrepose.com/archives/2003/07/10/nadd.html">N.A.D.D.</a></acronym> The activities in these areas that I am currently pursuing include writing my <a href="http://www.nanowrimo.org/userinfo.php?uid=115575">own novel</a>, learning <a href="http://en.wikipedia.org/wiki/Computer_network">network design</a>, and learning <a href="http://en.wikipedia.org/wiki/Cryptography">cryptography</a>.</p>
    <p>In my free time I like to hike and build stuff.</p>
    <p>I run <a href="http://pseudoweb.net"  >another website</a> where I occasionally write a blog and mess around with various web applications. But I have also slowly been posting projects that I am participating in <a href="code/">the projects section</a> of this site. And if you are feeling adventuresome, you can take a peek at <a href="resume.pdf" title="Resume in PDF form" onclick="javascript:urchinTracker ('/resume')">my resume</a>.</p>
  </div>
  <div class="quote">
  <p>My Contact info:</p>
  <blockquote><div id="hcard-Nat-Welch" class="vcard">
<div class="fn">Nat Welch</div>
<?php
include 'PHP/obfuscate.php';
$exp1 = obfuscate('707.799.8675', 'tel:7077998675');
echo '<div class="tel"> ', $exp1, '</div>';

$exp1 = obfuscate('nat at natwelch dot com', 'mailto:nat@natwelch.com');
echo '<div class="email"> ', $exp1, '</div>';
?></p>
</div>
</blockquote>
  
  </div>
  <div class="quote lighter">
    <p><strong>Twitter Status:</strong>
      <?php $text = $twit->get_item(0)->get_description(); echo substr($text, strpos($text, ':') + 2) ?>
      <a href="<?php echo $twit->get_item(0)->get_permalink(); ?>" target="_blank"><?php echo time_since($twit->get_item(0)->get_date('U')); ?></a></p>
  </div>
  <div class="quote">
    <p><strong>Most Recent Blog posts:</strong></p>
    <ul>
      <?php foreach ($blog->get_items(0,3) as $item): ?>
      <li><a href="<?php echo $item->get_permalink(); ?>"><?php echo $item->get_title(); ?></a> <small><?php echo time_since($item->get_date('U')); ?></small></li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div class="quote lighter">
    <p>As of May 7th 2007 I am the <a href="http://www.freedom-to-tinker.com/?p=1155">proud owner</a> of <b>DF 82 8A F5 6F EF 0F 15 F6 12 09 0B 03 21 DA CF</b>.
      <!-- Also this work is licensed under a 
<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/">Creative Commons Attribution-Share Alike 3.0 United States License</a>.-->
    </p>
  </div>
  <div class="footer">
    <!-- This page last updated on <?php echo date("F d Y H:i", filemtime('index.php')); ?> and you are accessing it on <?php echo date("F d Y H:i."); ?> -->
    <a href="http://validator-test.w3.org/check?uri=referer"><img src="images/valid_xhtml11_80x15_2.png" alt="Valid XHTML 1.0!" width="80" height="15" border="0"/></a> <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/"> <img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/us/80x15.png" /></a> <a href="http://jigsaw.w3.org/css-validator/validator?uri=http://natwelch.com"><img src="images/valid_css_80x15_2.png" border="0" alt="Valid CSS" /></a> </div>
</div>
</body>
</html>
