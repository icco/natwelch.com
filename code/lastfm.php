<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Nat's Last.Fm Fun</title>
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

-->
</style>
</head>
<body>
<div class="engulf">
<center><h2>Last.Fm User Comparisons</h2></center>
<?php if($_POST["user1"] == null ||  $_POST["user2"] == null) { ?>
<center>

<p>Please input the users you would like to compare.</p></center>
<form action="lastfm.php" method="post"><ul>
<li>User1: <input type="text" name="user1" maxlength="20" /> <small>ie. AlbertusMagnus</small></li>
<li>User2: <input type="text" name="user2" maxlength="20" /> <small>ie. Icco</small></li>
<li>Do you want to learn how close these users are numerically, or do you want to learn about their artist preferences?</li>
<li><select name="choice">
<option value="1">Numerical Comparison</option>
<option value="2">Artist Information</option>
</select></li>
<li><input type="submit" /></li>
</ul>
</form>

<?php } else {
	
	//Top artist getting
	$baseURL = "http://ws.audioscrobbler.com/1.0/user/";
	$page = "/topartists.xml";
	$user1 = urlencode($_POST["user1"]);
	$user2 = urlencode($_POST["user2"]);
	$choice = urlencode($_POST["choice"]);
	
	$url = $baseURL . $user1 . $page;
	$u1 = simplexml_load_file($url) or die("feed not loading");
	$url = $baseURL . $user2 . $page;
	$u2 = simplexml_load_file($url) or die("feed not loading");

	if($choice == 1)
	{
		//Taste-Meter getting
		$url = "http://ws.audioscrobbler.com/1.0/user/" . $user1 ."/tasteometer.xml?with=" .$user2;
		$taste = simplexml_load_file($url) or die("feed not loading");
		?>
    
<p>The users <a href="http://last.fm/user/<?php echo $user1; ?>"><?php echo $user1; ?></a> and <a href="http://last.fm/user/<?php echo $user2; ?>"><?php echo $user2; ?></a> have a <a href="http://en.wikipedia.org/wiki/Jaccard_index#Tanimoto_coefficient_.28extended_Jaccard_coefficient.29" title="wikipedia page for Tanimoto Coefficent">Tanimoto Coefficient</a> of <?php echo tanimoto($u1->artist, $u2->artist); ?> and a <a href="http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient" title="Wikipedia page for pearson's coefficent">Pearson's Coefficent</a> of <?php echo pearson($u1->artist, $u2->artist); ?> when comparing their top 50 played artists. Now it would be awesome if either of these numbers matched up to <a href="http://last.fm" title="Last.FM Music Archive">Last.FM</a>'s Taste-meter number of <?php echo $taste->score; ?>.</p>

<?php } elseif($choice == 2) 
	{
		echo "<p>Both users like:<ul>";
		foreach(combineSublime($user1,$user2) as $item)
		{
			echo "<li>" . $item . "</li>";
		}
		
		echo "</ul></p>";
	
	 } else { ?>
<p>Not a valid input... What did you do?!?</p>

<?php } ?> 

<p><a href="lastfm.php">Input Different Users?</a></p>
	
	<?php } ?>
	
<p align="center">This page coded by <a href="http://natwelch.com">Nat Welch</a> and <a href="http://audioscrobbler.net" title="powered by Audioscrobler"><img src="../images/mini_greyAS.gif" alt="powered by Audioscrobler" /></a></p>
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
//parses a few lists, returns an array
function combineSublime($u1,$u2)
{
	$baseURL = "http://ws.audioscrobbler.com/1.0/user/";
	$arts = "/topartists.xml";
	$recs = "/systemrecs.xml";
	
	$url = $baseURL . $u1 . $arts;
	$u1 = simplexml_load_file($url) or die("feed not loading");
	$url = $baseURL . $u2 . $arts;
	$u2 = simplexml_load_file($url) or die("feed not loading");
	
	$i = 0;
	
	foreach($u1->artist as $item)
	{
		$temp[$i] = trim($item->name);
		$i = $i + 1;
	}
	
	foreach($u2->artist as $item)
	{
		$temp2[$i] = trim($item->name);
		$i = $i + 1;
	}
	
	return array_intersect($temp2,$temp);
}

//Implementation of Pearson's Coefficient. 
function pearson($me, $you)
{
	foreach($me as $item)
	{
		foreach($you as $item2)
		{
			if(strcmp($item->name,$item2->name) == 0)
			{
				$sim[0][trim($item->name)] = intval($item->playcount);
				$sim[1][trim($item->name)] = intval($item2->playcount);
			}
		}
	}
	
	$n = count($sim);
	
	if($n == 0)
	{
		return 0;
	}
	

	//Make n the sumation of standard scores.
	$n = 0;
	foreach(array_keys($sim[0]) as $name)
	{
		$n += standScore($sim[0],$name)*standScore($sim[1],$name);
	}
	
	$n = $n/count($sim[0]);
	
	return $n;

}

//Another way to do Pearson's
//To Be completed, I'm doing something wrong...
function pearson2($u1, $u2)
{
	foreach($u1 as $item)
	{
		foreach($u2 as $item2)
		{
			if(strcmp($item->name,$item2->name) == 0)
			{
				$sim[0][trim($item->name)] = intval($item->playcount);
				$sim[1][trim($item->name)] = intval($item2->playcount);
			}
		}
	}
	
	$n = count($sim);
	
	if($n == 0)
	{
		return 0;
	}

	$sum1 = 0;
	$sum2 = 0;
	$sumMult = 0;
	$sumSQ1 = 0;
	$sumSQ2 = 0;
	$r = 0;
	
	foreach($sim[0] as $a) 
	{
		$sum1 += $a;
		$sumSQ1 += pow($a,2);
	}

	foreach($sim[1] as $a) 
	{
		$sum2 += $a;
		$sumSQ2 += pow($a,2);
	}
	
	foreach(array_keys($sim[0]) as $name)
	{
		$sumMult += ($sim[0][$name] * $sim[1][$name]);
	}
	
	$r = $sumMult - (($sum1*$sum2)/$n);
	$r = $r/sqrt(($sumSQ1 - (pow($sum1,2)/$n))*($sumSQ2 - (pow($sum2,2)/$n)));
	
	return $r;
}

//Return's Tanimoto Coefficient.
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
	
	return (count($sim)/(count($you)+count($me)-count($sim)));
}

function buildScoreArray($u1, $u2)
{
	foreach($u1 as $a)
	{
		$scores[0][trim($a->name)] = intval($a->playcount);
	}	

	foreach($u2 as $a)
	{
		$scores[1][trim($a->name)] = intval($a->playcount);
	}	
	
	return $scores;
}

function average($array)
{
    $sum   = array_sum($array);
   
    $count = count($array);
   
    return $sum/$count;
}

//The average function can be use independantly but the deviation function uses the average function.

function deviation($array)
{
    $avg = average($array);
   
    foreach ($array as $value)
	{
        $variance[] = pow($value-$avg, 2);
    }
    
	$deviation = sqrt(average($variance));
    
	return $deviation;
}

function standScore($array,$key)
{
	$temp = $array[$key] - average($array);
	$temp = $temp/deviation($array);
	return $temp;
}

?>