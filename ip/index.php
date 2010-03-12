<?php
if ($_SERVER['HTTP_X_FORWARD_FOR']) {
   $ip = $_SERVER['HTTP_X_FORWARD_FOR'];
} else {
   $ip = $_SERVER['REMOTE_ADDR'];
}
?>

<html>
<head>
<title>Your IP</title>
</head>
<body>
<?php echo $ip; ?>
</body>
</html>
