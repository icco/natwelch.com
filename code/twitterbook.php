<?php
/* 
Twitterbook
by Stuart Robertson
of http://www.designmeme.com
based on code from
http://morethanseven.net/posts/posting-to-twitter-using-php
http://spindrop.us/2007/02/03/make-adium-show-your-facebook-status/
*/

// You will need to edit these 4 variables
$url = 'http://calpoly.facebook.com/feeds/status.php?id=1063770029&viewer=1063770029&key=a2f5a83db9&format=rss20'; 
// Your facebook feed
$fbname = 'Nat'; // Facebook name
$username = 'calvin166@pseudoweb.net'; // twitter username
$password = 'nat100'; // twitter password

// The twitter API address - you shouldn't have to change this
$twitterurl = 'http://twitter.com/statuses/update.xml'; 

// setup curl
$ch = curl_init();
curl_setopt ($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CULROPT_HEADER, 0);

//spoof Firefox
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.1.1) Gecko/20061223 Firefox/2.0.0.1");

// begin output buffering  
ob_start();
curl_exec ($ch);
curl_close ($ch);

// save buffer to string
$xmlstr = ob_get_contents();
ob_end_clean();

// convert string to xml object
$xml = new SimpleXMLElement($xmlstr);

// complete Facebook prefix
$fbprefix = $fbname . " is ";

// remove prefix from facebook status message
$message = str_replace($fbprefix,null,$xml->channel->item->title);

// capitalize first letter
$message = ucfirst($message);

// Set up and execute the curl process
$curl_handle = curl_init();
curl_setopt($curl_handle, CURLOPT_URL, "$twitterurl");
curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 2);
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl_handle, CURLOPT_POST, 1);
curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "status=$message");
curl_setopt($curl_handle, CURLOPT_USERPWD, "$username:$password");
$buffer = curl_exec($curl_handle);
curl_close($curl_handle);

// check for success or failure
if (empty($buffer)) {
    echo 'message';
} else {
    echo '<p>Twitter status for ' . $username . ' updated:<br />' . $message . '</p><p>Powered by <a href="http://www.designmeme.com/2007/03/22/twitterbook/">Twitterbook</a></p>';
}
?>