<?php

// Print out visitors IP address.

if ($_SERVER['HTTP_X_FORWARD_FOR']) {
   $ip = $_SERVER['HTTP_X_FORWARD_FOR'];
} else {
   $ip = $_SERVER['REMOTE_ADDR'];
}

header("Content-type: text/plain-text");
echo $ip;
?>
