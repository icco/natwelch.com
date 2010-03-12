<?php
function q2a($in)
{
	foreach($in as $row)
	{
		$out[sprintf("%d",$row['hour'])] = $row['u'];
	}

	for($i = 00; $i < 24; $i++)
	{
		if($out[$i] == NULL)
		{
			$out[$i] = 0;
		}
	}

	// Need this to protect from funkyness.
	ksort($out);

	return $out;
}

function s($float)
{
	return sprintf("%.2f",$float);
}

function buildChartString($arr, $max)
{
	$chart = "";

	foreach($arr as $row)
	{
		$chart .= s(($row/$max)*100) . ",";
	}
	$chart .= s(($row/$max)*100) . ",";
	$chart .= s(($arr[0]/$max)*100);

	return $chart;
}

function graphServer($SERVER_NAME, $DBNAME)
{
	print "<h2>Users on ".  $SERVER_NAME . "</h1>\n";
	print "<h3> By Hour</h3>\n<p>";

	// Connect to DB.
	try {
		$db = new PDO("sqlite:" . $DBNAME);
	} catch (PDOException $e) {
		echo 'Connection failed: ' . $e->getMessage();
	}

	// The Querys
	$query = "select strftime('%H',ts,'unixepoch','localtime') as hour, avg(u) as u from n group by hour";
	$dayQuery = "select strftime('%H',ts,'unixepoch','localtime') as hour, u from n where ts >= strftime('%s','now','-1 day')"; 
	$day2Query = "select strftime('%H',ts,'unixepoch','localtime') as hour, u from n where ts between strftime('%s','now','-2 day') AND strftime('%s','now','-1 day')"; 
	$maxQuery = "select strftime('%H',ts,'unixepoch','localtime') as hour, max(u) as u from n group by hour";
	$minQuery = "select strftime('%H',ts,'unixepoch','localtime') as hour, min(u) as u from n group by hour";
	$max = "select max(u) from n";

	$max = $db->query($max)->fetch();
	$max = $max['max(u)'];

	$chart = "http://chart.apis.google.com/chart?cht=lc&chd=t:";

	// Average
	$avgArr = q2a($db->query($query));
	$chart .= buildChartString($avgArr, $max);
	$chart .= "|";
	
	//Yesterday
	$yesterArr = q2a($db->query($dayQuery));
	$chart .= buildChartString($yesterArr, $max);
	$chart .= "|";

	// 48 hours ago
	$prevArr = q2a($db->query($day2Query));
	$chart .= buildChartString($prevArr, $max);
	$chart .= "|";

	// Min per hour 
	$minArr = q2a($db->query($minQuery));
	$chart .= buildChartString($minArr, $max);
	$chart .= "|";
	
	// Max per hour 
	$maxArr = q2a($db->query($maxQuery));
	$chart .= buildChartString($maxArr, $max);
	
	// Other chart things
	$chart .= "&chs=650x300";
	$chart .= "&chxt=x,x,y&chxl=0:|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|||1:|Hour|";
	$chart .= "&chco=000fff,666888,00ff00,ffbb33,ff0f00&chdl=Average|Last 24 Hours|48 Hours ago|Min|Max&chg=4,10,1,5";
	$chart .= "&chls=2,1,0|2,1,0|2,1,0|1,6,3|1,6,3";

	print "\n<img title=\"" . $SERVER_NAME . " user chart\" src=\"" . $chart . "\" \\ >\n";
	print "</p><p><small>Blue = Average users per hour<br/>\n";
	print "Green = Total Users per hour today</small></p><p>\n";
	print "Max Users Ever Seen On " . $SERVER_NAME . ": <strong>" . $max ."</strong></p>\n";
	print "<p><table id=\"" . $DBNAME . "\">\n";

	$t0 = "<thead><tr><th axis=\"string\">Hour</th>\n";
	$t1 = "<tr><td class=\"bold\">Average</td>\n";
	$t2 = "<tr><td class=\"bold\">Last 24 Hours</td>\n";
	$t3 = "<tr><td class=\"bold\">Previous 24 Hours</td>\n";
	$t4 = "<tr><td class=\"bold\">Max</td>\n";
	$t5 = "<tr><td class=\"bold\">Min</td>\n";
	
	foreach($avgArr as $hour => $row)
	{
		$t0 .= "<th axis=\"number\">" . $hour . "</th>\n ";
		$t1 .= "<td>" . sprintf("%3.1f",$row) . "</td>\n ";
		$t2 .= "<td>" . $yesterArr[$hour] . "</td>\n ";
		$t3 .= "<td>" . $prevArr[$hour] . "</td>\n ";
		$t4 .= "<td>" . $maxArr[$hour] . "</td>\n ";
		$t5 .= "<td>" . $minArr[$hour] . "</td>\n ";
	}

	echo $t0 . "</tr>\n</thead><tbody>";
	echo $t1 . "</tr>\n";
	echo $t2 . "</tr>\n";
	echo $t3 . "</tr>\n";
	echo $t4 . "</tr>\n";
	echo $t5 . "</tr>\n</tbody>";

	print "</table></p>\n";
	print "<script type=\"text/javascript\">\n";
	print "var myTable = {}; window.addEvent('domready', function(){ myTable = new sortableTable('$DBNAME', {overCls: 'over', onClick: function(){alert(this.id)}});});\n";
	print "</script>";
	// Close DB
	$db = null;

	print "<!-- Chart URL is " . strlen($chart) . "characters long -->";
}
?>
<html>
<head>
<title>Server Usage Stats</title>
<script src="scripts/mootools-core.js" type="text/javascript"></script>
<script src="scripts/mootools-more.js" type="text/javascript"></script>
<script src="scripts/sortableTable/sortableTable.js" type="text/javascript"></script>
<link href="scripts/sortableTable/sortableTable.css" rel="stylesheet" type="text/css" />
<style>
<!--
td,th {
	text-align: center;
}
.odd{
	background-color: #fff;
	color: #222;
}
.even{
	background-color: #eee;
	color: #444;

}

.bold {
	font-weight: 900;
}

h2,h3 {
margin: 0;
padding: 0;
}
-->
</style>
</head>
<body>
<h1>User Statistics for Cal Poly CSC Servers</h1>
<?php 
	graphServer("Vogon", "user.db");
	graphServer("Falcon", "falconUser.db");
?>
<p id="foot">Go back to <a href="http://users.csc.calpoly.edu/~nwelch/">Nat's Homepage</a>.</p>
</body>
</html>

