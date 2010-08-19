<?php 
$b = time () ;
$day = date("D",$b) ;

//This is to make it always go to the right place, making this code excesive :p
$day = "fraturday";

//Here we redirect the user to a differnt programming site based on what day of the week it is.

switch($day){
case "Sun": header( 'Location: http://php.about.com' ) ;
case "Mon": header( 'Location: http://webdesign.about.com' ) ;
case "Tue": header( 'Location: http://javascript.about.com' ) ;
case "Wed": header( 'Location: http://perl.about.com' ) ;
case "Thu": header( 'Location: http://python.about.com' ) ;
case "Fri": header( 'Location: http://ruby.about.com' ) ;
case "Sat": header( 'Location: http://cplus.about.com' ) ;
default : header( 'Location: http://natwelch.com/code/' );
}

?>