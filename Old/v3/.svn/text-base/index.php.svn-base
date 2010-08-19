<?php 
include 'PHP/simplepie.inc'; // for RSS feeds
include 'PHP/obfuscate.php'; // for javascripting my phone number and email
include 'PHP/age.php'; //age() and time_since()
include "PHP/v3.generics.php"; 

$blog = new SimplePie('http://pseudoweb.net/feed');

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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head profile="http://gmpg.org/xfn/11">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Nat Welch Dot Com</title>

<meta name="Description" content="The homepage of Nat Welch." />
<meta name="Keywords" content="Nat, welch, natwelch, nathaniel, nathanielwelch, dehn, code" />


<link href="includes/css/crazyJSstyle.css" rel="stylesheet" type="text/css" />
<?php print get_iphone(); ?>

</head>
<body>
<?php if($debug) { echo "<pre>"; var_dump($twit); echo "</pre>"; }?>
<div class="box">
 <!--"Why, Mr. Anderson? Why, why, why? Why do you do it? Why, why get up? Why keep fighting? Do you believe you're fighting for something, for more than your survival? Can you tell me what it is, do you even know? Is it freedom, or truth, perhaps peace, could it be for love? Illusions, Mr. Anderson, vagaries of perception. Temporary constructs of a feeble human intellect trying desperately to justify an existence that is without meaning or purpose! And all of them as artificial as the matrix itself, although only a human mind could invent something as insipid as love. You must be able to see it Mr. Anderson, you must know it by now. You can't win, it's pointless to keep fighting! Why, Mr. Anderson, why? Why do you persist?" - Agent Smith -->
<div id="photo">
 <a href="."><img src="images/swirlyface.png" border="0" width="350" alt="A face of Nat" /></a>
 </div>
 <div id="basic-accordian" >
  <div id="test-header" class="accordion_headings header_highlight" ><img src="images/FamFamSilk/comment.png" class="icon" alt="*" />Introduction</div>
  <div id="test-content">
    <div class="accordion_child"> 
    <p>My Name is Nat, and I am a &quot;developer&quot;. I guess it would probably be better to label myself as a &quot;student&quot; but whatever.</p>
    <p>Anyway, I'm <?php echo age(); ?> years old and love to create things. You can read more about me below, or visit my projects page to see some silly code I did recently (or not so recently).</p>
    <p>Me Around the Web: </p>
    <ul id="melinks">
    <li><a href="http://natwelch.com/code/" title="Various Things I have Created" rel="me">My Code + Projects</a> </li> 
    <li><a href="http://pseudoweb.net" rel="me" title="Nat Welch's Blog">My Blog</a></li>
    <li><a href="http://flickr.com/photos/icco" title="Photos" rel="me">My Photos (on Flickr)</a></li>
    <li><a href="resume/" title="Resume in PDF form" rel="me"  onclick="javascript:urchinTracker ('/resume')">My Resume <small>(PDF)</small></a></li>
    <li><a href="http://www.linkedin.com/in/natwelch" title="Nathaniel Welch on LinkedIn" rel="me" >My LinkedIn</a></li>
    <li><a href="http://twitter.com/icco" title="Nat Welch on Twitter" rel="me">My Twitter</a></li>
    <li><a href="http://www.last.fm/user/icco/" title="Nat Welch on Last.FM" rel="me">My Last.FM</a></li>
    <li><a href="http://www.facebook.com/p/Nat_Welch/1063770029" title="Nat Welch on Facebook" rel="me">My Facebook</a></li>
    </ul>
	<p>My <a id="publicKey" href="key/" title="Nat Welch">public key</a>.</p>
    <p>My Contact info:</p>
  <blockquote>
  <div id="hcard-Nat-Welch"  class="vcard">
<div class="fn" style="display: none;">Nat Welch</div>
<?php
$exp1 = obfuscate('707.799.8675', 'tel:7077998675');
echo '<div class="tel"> ', $exp1, '</div>';

$exp1 = obfuscate('nat at natwelch dot com', 'mailto:nat@natwelch.com');
echo '<div class="email"> ', $exp1, '</div>';
?>
     </div></blockquote>
     </div>
  </div>
  
  <div id="test1-header" class="accordion_headings" ><img src="images/FamFamSilk/user_gray.png" class="icon" alt="*" />About Me</div>
  <div id="test1-content">
    <div class="accordion_child">  <p>My name is Nathaniel Welch, you can call me Nat. I am a Computer Science major at the <a href="http://calpoly.edu" title="Cal Poly's Website">California Polytechnic State University in San Luis Obispo</a>, more affectionately known as Cal Poly SLO. Along side my major, I am working to obtain a minor in English.</p>
    <p>My interests include <a href="http://en.wikipedia.org/wiki/Communication">communication</a>, <a href="http://en.wikipedia.org/wiki/Design">design</a>, and <a href="http://en.wikipedia.org/wiki/Portal:Technology">technology</a>. I am also a self proclaimed <a href="http://en.wikipedia.org/wiki/Infornography">Infornographer</a> and have been known to suffer greatly from <acronym title="Nerd Attention Deficiency Disorder"> <a href="http://www.randsinrepose.com/archives/2003/07/10/nadd.html">N.A.D.D.</a></acronym> The activities in these areas that I am currently pursuing include writing my <a href="http://www.nanowrimo.org/userinfo.php?uid=115575">own novel</a>, learning <a href="http://en.wikipedia.org/wiki/Computer_network">network design</a>, and learning <a href="http://en.wikipedia.org/wiki/Cryptography">cryptography</a>.</p>
    <p>In my free time I like to hike and build stuff.</p>
    <p>I run <a href="http://pseudoweb.net"  >another website</a> where I occasionally write a blog and mess around with various web applications. But I have also slowly been posting projects that I am participating in <a href="code/">the projects section</a> of this site. And if you are feeling adventuresome, you can take a peek at <a href="resume/" title="Resume in PDF form"   onclick="javascript:urchinTracker ('/resume')">my resume</a>.</p></div>
  </div>
 
  <div id="test2-header" class="accordion_headings" ><img src="images/FamFamSilk/book_open.png" class="icon" alt="*" />Blog</div>
  <div id="test2-content">
    <div class="accordion_child"> 
    My blog is hosted over at <a href="http://pseudoweb.net" title="Nat's blog" rel="me">Pseudoweb.net</a>. <br />These are the most recent posts:
    <ul id="blog">
      <?php foreach ($blog->get_items(0,5) as $item): ?>
      <li><a href="<?php echo $item->get_permalink(); ?>"><?php echo $item->get_title(); ?></a> <small><?php echo time_since($item->get_date('U')); ?></small></li>
      <?php endforeach; ?>
    </ul>
  </div>
  </div>
   
    <div id="test3-header" class="accordion_headings" ><img src="images/FamFamSilk/application_view_list.png" class="icon" alt="*" />Twitter</div>
  <div id="test3-content">
    <div class="accordion_child"><a href="http://twitter.com/icco" title="my twitter page" target="_blank" rel="me">My Twitter Status</a>: <?php print $twitprint; ?></div>
  </div>
  
  <div id="test5-header" class="accordion_headings" ><img src="images/FamFamSilk/heart_add.png" class="icon" alt="*" />Friends</div>
  <div id="test5-content">
    <div class="accordion_child">  
    <p>Not many of my friends are online, but a few are.</p>
    <ul id="links">
    <li><a href="http://prenticew.com" rel="friend met co-resident" title="My Good Friend and Roomate Prentice's Site">Prentice Wongvibulsin</a> - Roommate and a great code and photographer.</li>
    <li><a href="http://www.wiredgoats.com/" rel="friend met" title="Dustin's secret site of nothing">Doc Mollo</a> - The man who got me started in linux and a great friend.</li>
    <li><a href="http://ErikCarpenter.com" rel="friend met" title="Erik, AKA Urban.">Urban</a> - If the OS exists, he probably installed it and didn't like it.</li>
    <li><a href="http://mgius.livejournal.com/" title="mgius's Livejournal. Angst Ensues" rel="friend co-resident met" >Mark Gius</a> - Roommate and good friend.</li>
    <li><a href="http://users.csc.calpoly.edu/~mwooding/" title="Matt's Little Space of the internet" rel="friend co-resident met">Matt Wooding</a> - Roommate, Friend, Artist and Star Wars enthusiast.</li>
    <li><a href="http://users.csc.calpoly.edu/~boppenhe/" title="Brian's Webpage" rel="friend met">Brian Oppenheim</a> - Probably one of the most diligent and impressive coders I know.</li>
    <li><a href="http://www.lydiadehn.com/" title="Mom" rel="met parent">Lydia Dehn</a> - My mom and her Art.</li>
    <!-- Commented out until he gets his act together...
    <li><a href="http://www.dcwelch.com/" rel="met parent">David Welch</a></li>
    -->
    </ul>

     </div>
    </div>
  
  <div id="test4-header" class="accordion_headings" ><img src="images/FamFamSilk/lightbulb_off.png" class="icon" alt="*" />Other</div>
  <div id="test4-content">
    <div class="accordion_child">  <p>As of May 7th 2007 I am the <a href="http://www.freedom-to-tinker.com/?p=1155">proud owner</a> of <b>DF 82 8A F5 6F EF 0F 15 F6 12 09 0B 03 21 DA CF</b>.
    </p><p>This page was made by Nat, with icons taken from <a href="http://www.famfamfam.com/lab/icons/silk/">FamFamFam</a>.</p>
    </div>
    </div>
  </div>
  <div id="footer">
<a href="http://validator-test.w3.org/check?uri=referer"><img src="images/valid_xhtml11_80x15_2.png" alt="Valid XHTML 1.0!" width="80" height="15" border="0"/></a> <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/"> <img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/us/80x15.png" /></a> <a href="http://jigsaw.w3.org/css-validator/validator?uri=http://natwelch.com"><img src="images/valid_css_80x15_2.png" border="0" alt="Valid CSS" /></a> <br />
<a href="http://www.gmpg.org/xfn/"><img src="images/xfn-btn.gif" border="0" alt="XFN Friendly" /></a> <a href="http://www.spreadfirefox.com/node&amp;id=0&amp;t=317"><img border="0" alt="Firefox 3" title="Firefox 3" src="http://sfx-images.mozilla.org/affiliates/Buttons/firefox3/FF3b80x15_square.gif"/></a> <a href="http://php.net"><img src="images/php-powered.png" border="0" alt="Powerd by PHP" /></a>
  </div>
</div>

<script src="includes/js/accordian.pack.js" type="text/javascript"></script>
<script type="text/javascript">	new Accordian('basic-accordian',3,'header_highlight');</script>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
<script type="text/javascript">_uacct = "UA-333449-2"; urchinTracker();</script>

<!-- This page last updated on <?php echo date("F d Y H:i", filemtime('index.php')); ?> and you are accessing it on <?php echo date("F d Y H:i."); ?> -->
</body>
</html>
