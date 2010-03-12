<?php function NatHead($title) { 

if($title != ""){
$title = " > " . $title;
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="Keywords" content="Nat, welch, natwelch, nathaniel, nathanielwelch, dehn, code" />
<title>nat welch dot com<?php print $title ?></title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-333449-2";
urchinTracker();
</script>
<div class="all">
		<div class="quote lighter">
			<div class="header"><a href="http://natwelch.com" title="About Me">Home</a> | <a href="http://natwelch.com/code/" title="Various Things I have Created">Projects</a> | <a href="http://pseudoweb.net"  >Blog</a> | <a href="http://flickr.com/photos/icco" title="Photos"  >Photos</a> | <a href="../NathanielWelchResume.pdf" title="Resume in PDF form"   onclick="javascript:urchinTracker ('/resume')">Resume<font size="-4">(PDF)</font></a> </p>
		</div></div>
<?php } ?>