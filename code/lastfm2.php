<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Nat's Last.Fm Friend Attack</title>
<style type="text/css">
<!--
li {
	list-style-type: none;
	padding: 5px;
}

a img {
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
}

a {
	text-decoration: none;
	color: #666666;
	}
a:hover {
	text-decoration: underline;
	}
a:visited {
	color: #666666;
	}
img {
	vertical-align: middle;
}
.engulf {
	width: 480px;
	margin-right: auto;
	margin-left: auto;
	border: 1px solid #CCCCCC;
	margin-top: 15px;
	margin-bottom: 30px;
	padding: 10px;
}
h2 {
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;
	font-weight: bold;
	font-variant: small-caps;
}
table {
	width: 325px;
	margin-right: auto;
	margin-left: auto;
}

-->
</style>
</head>
<body>
<div class="engulf">
<?php 
//require("lastfm.php"); //Has all fo the math functions

if($_POST["user1"] == null) { ?>
<center>

<p>Please input the user you would like to begin with.</p></center>
<form action="lastfm2.php" method="post"><ul>
<li>User Name: <input type="text" name="user1" maxlength="20" /> <small>ie. Icco</small></li>
<li><input type="submit" /></li>
</ul>
</form>

<?php } else {
	
	//Top artist getting
	$baseURL = "http://ws.audioscrobbler.com/1.0/user/";
	$user1 = urlencode($_POST["user1"]);
	$url = $baseURL . $user1 . "/neighbours.xml";
	
	$neighbors = simplexml_load_file($url) or die("feed not loading");
	
	$c = 0;
	foreach($neighbors->user as $user)
	{
		$user = trim($user["username"]);
		$peoples[$c] = $user;
		$c++;
	}
	
	/*foreach($peoples as $user)
	{
		$url = $baseURL . $user . "/neighbours.xml";
		$neighbors = simplexml_load_file($url) or die("feed not loading");
		foreach($neighbors->user as $u)
		{
			$u = trim($u["username"]);
			$peoples[$c] = $u;
			$c++;
		}
	}*/
	
	$peoples = array_unique($peoples);
	natcasesort($peoples);
	
	$page = "/topartists.xml";
	$url = $baseURL . $user1 . $page;
	$user1 = simplexml_load_file($url) or die("feed not loading");
	$user1 = $user1->artist;
	
	print "<table>";
	
	foreach($peoples as $dude)
	{
		$url = $baseURL . $dude . $page;
		$dudette = simplexml_load_file($url) or die("feed not loading");
		$dudette = $dudette->artist;
		print makeBar($dude,tanimoto($user1, $dudette)*200);
	}
	print "</table>";
 ?>

<?php } ?>
</div>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-333449-2";
urchinTracker();
</script>
</body>
</html>
<?php
function makebar($name,$num)
{
	$ret = "<td><div style='width:" . $num . "px; background:#666; height: 20px;' /></td></tr>";
	$ret = "<tr><td style='text-align: right;'>" . $name . $ret;
	
	return $ret;

}

function tanimoto($me, $you)
{
	$count = 0;
	foreach($me as $item)
	{
		foreach($you as $item2)
		{
			if(strcmp($item->name,$item2->name) == 0)
			{
				$sim[$count] = $item->name;
				$count++;
			}
		}
	}
	$denom = (count($you)+count($me)-count($sim));
	if($denom == 0)
	{
		return 0;
	}
	return (count($sim)/$denom);
}
?>