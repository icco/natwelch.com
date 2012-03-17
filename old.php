<?php 
require 'PHP/age.php'; //age() and time_since()
?>

<!DOCTYPE html>
<html>
   <head profile="http://purl.org/uF/2008/03/">

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Nat Welch Dot Com</title>

      <meta name="Description" content="The homepage of Nathaniel 'Nat' Welch." />
      <meta name="Keywords" content="Nat, welch, natwelch, nathaniel, nathanielwelch, dehn, code, student, developer, software" />

      <link href="includes/css/style.css" rel="stylesheet" type="text/css" />
      <?php print get_iphone(); ?>

      <link rel="openid.server" href="https://openid.claimid.com/server" />
      <link rel="openid.delegate" href="https://openid.claimid.com/icco" />
   </head>
   <body>
   <div id="container" class="card-open">
   <div id="card" class="vcard">
      <div id="card-front">
      <img src="http://natwelch.com/images/natifixit.jpg" alt="Photo of Nat Welch" id="photoofme" class="photo" />
         <div id="name"><span class="fn">Nat Welch</span></div>
         <div id="job">Student, Code Designer<br /> &amp; Courageous Knight<sup>*</sup></div>
      </div>
      <div id="card-back" style="margin-top: 10px;">
         <p id="first">My name is <abbr title="Nathaniel Dehn Welch">Nat</abbr>, and I am a developer and a student.</p>
         <p>I am currently <?php echo age(); ?> years old and love to create things. I have a passion for design, communication, and technology. You can contact me at <a  class="email" href="mailto:nat@natwelch.com">nat@natwelch.com</a> or at <span class="tel"><span class="type" style="display: none;">cell</span><a href="tel:7077998675" class="value">707.799.8675</a></span>.</p>
         <p>My persona is scattered across the web in various places, such as: </p>
         <ul id="melinks">
            <li class="sortme">
               <a href="./code/" title="Various Things I have Created" rel="me">My Code &amp; Projects</a>
             </li> 
            <li class="sortme">
               <a href="http://pseudoweb.net" rel="me" title="Nat Welch's Blog" class="url">My Blog</a>
            </li>
            <li class="sortme">
               <a href="http://flickr.com/photos/icco" title="Photos" rel="me" class="url">My Photos <small>(on Flickr)</small></a>
            </li>
            <li class="sortme">
               <a href="resume/" title="Resume in PDF form" rel="me" onclick="javascript:urchinTracker('/resume')">My Resume <small>(PDF)</small></a>
            </li>
            <li class="sortme">
               <a href="http://www.linkedin.com/in/natwelch" title="Nathaniel Welch on LinkedIn" rel="me" class="url" >My LinkedIn</a>
            </li>
            <li class="sortme">
               <a href="http://twitter.com/icco" title="Nat Welch on Twitter" rel="me" class="url">My Twitter</a>
            </li>
            <li class="sortme">
               <a href="http://www.last.fm/user/icco/" title="Nat Welch on Last.FM" rel="me" class="url">My Last.FM</a>
            </li>
            <li class="sortme">
               <a href="http://www.facebook.com/natwelch" title="Nat Welch on Facebook" rel="me" class="url">My Facebook</a>
            </li>
            <li class="sortme">
               <a href="http://www.delicious.com/calvin166" title="Nat Welch on Delicious" rel="me" class="url">My Del.icio.us</a>
            </li>
            <li class="sortme">
               <a id="publicKey" href="key/" title="Nat Welch's PGP Key">My Public Key</a>
            </li>
            <li class="sortme">
               <a href="friends.php" title="Nat Welch's Friends">My Friends</a>
            </li>
            <li class="sortme">
               <a href="http://www.github.com/icco" title="Nat Welch on Github" rel="me" class="url">My GitHub</a>
            </li>
            <li class="sortme" style="display: none;">
               <a href="http://natwelch.com" title="Nat Welch Dot Com" rel="me" class="url">My Website</a>
            </li>
         </ul>
         <br clear="all"/>
         <p>
            I am a Computer Science student at the California Polytechnic State 
            University in San Luis Obispo, more affectionately known as Cal Poly 
            SLO. Along side my major, I am working to obtain a minor in English. 
            Outside of school I am a Software Developer for <a 
            href="http://ifixit.com">iFixit</a>.
         </p>
         <p><small><em>* Knighthood self-proclaimed.</em></small></p>
      </div>
   </div>
         <div id="clicker">More</div>
   <div id="footer">
      <a href="http://validator.w3.org/check?uri=referer"><img src="images/valid_xhtml11_80x15_2.png" alt="Valid XHTML 1.0!" border="0" width="80" height="15" /></a> <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/"><img alt="Creative Commons License" style="border-width: 0pt;" src="http://i.creativecommons.org/l/by-sa/3.0/us/80x15.png" /></a> <a href="http://jigsaw.w3.org/css-validator/validator?uri=http://natwelch.com"><img src="images/valid_css_80x15_2.png" alt="Valid CSS" border="0" /></a> <br />
      <a href="http://www.gmpg.org/xfn/"><img src="images/xfn-btn.gif" alt="XFN Friendly" border="0" /></a> <a href="http://www.spreadfirefox.com/node&amp;id=0&amp;t=317"><img alt="Firefox 3" title="Firefox 3" src="http://sfx-images.mozilla.org/affiliates/Buttons/firefox3/FF3b80x15_square.gif" border="0" /></a> <a href="http://php.net"><img src="images/php-powered.png" alt="Powerd by PHP" border="0" /></a>
   </div>
   </div>
   <!-- This page last updated on <?php echo date("F d Y H:i", filemtime('index.php')); ?> and you are accessing it on <?php echo date("F d Y H:i."); ?> -->


   <script src="includes/js/mootools-core.js" type="text/javascript"></script>
   <script src="includes/js/mootools-more.js" type="text/javascript"></script>

   <script src="includes/js/bcard.js" type="text/javascript"></script>
   <script src="includes/js/konami.js" type="text/javascript"></script>
   <script type="text/javascript" charset="utf-8">
      var entered = false
      var oldbg = "";
      konami = new Konami(function() {
         if(!entered) {
            //console.log('Konami Code Activated!');
            var el = $$('body');
            oldbg = el.getStyle('background');
            el.setStyle('background', 'url("images/konamipower.gif")');
            entered = true;
         } else {
            //console.log('Konami Code Deactivated!');
            var el = $$('body');
            el.setStyle('background', oldbg);
            entered = false;
         }
      });
   </script>
   <script type="text/javascript" charset="utf-8">init_page();</script>
   <script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
   <script type="text/javascript">_uacct = "UA-333449-2"; urchinTracker();</script>
   </body>
</html>
