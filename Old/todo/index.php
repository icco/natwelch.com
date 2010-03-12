<?php
$host   = 'localhost'; // Hostname of MySQL server
$dbUser = 'calvin16_test';    // Username for MySQL
$dbPass = 'calvin16_test';    // Password for user
$dbName = 'calvin16_test'; // Database name 

function &connectToDb($host, $dbUser, $dbPass, $dbName)
{
 // Make connection to MySQL server
 if (!$dbConn = @mysql_connect($host, $dbUser, $dbPass)) {
   return false;
 }

 // Select the database
 if (!@mysql_select_db($dbName)) {
   return false;
 }

 return $dbConn;
} 

// Go To the Library and look up SierraMadre
$dbConn = &connectToDb($host, $dbUser, $dbPass, $dbName);
?>

<form action="index.php" method="post">
Enter what you need to do: <input type="text" name="item" /><br />
Enter when it's due: <input type="text" name="due" /><br />
<input type="submit" title="Add Item"/>
</form>

<?php

if(isset($_POST['item'])){
$postID = mysql_escape_string($_POST[item]);
$postDue = mysql_escape_string($_POST[due]);

$sql="INSERT INTO todo (item, due, date)
VALUES
('$postID','$postDue', now())";

if (!mysql_query($sql,$dbConn))
  {
  die('Error: ' . mysql_error());
  }
}
// A query to select all articles
$result = mysql_query("SELECT ID, item, due FROM todo", $dbConn);

while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
    printf("%s)  %s  Due: %s <br />", $row[0], $row[1], $row[2]);  
}

mysql_free_result($result);
?>