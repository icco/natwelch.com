<?php
/**
 * A file that lists all files in a directory, ignoring hidden files and itself.
 * Also this uses a natural sort and a simple stylesheet.
 */
?>
<html>
   <head>
      <title>Nat's Images</title>
      <link href="style.css" rel="stylesheet" type="text/css"/> 
   </head>
   <body>
   <?php

   // open this directory 
   $myDirectory = opendir(".");

   // get each entry
   while($entryName = readdir($myDirectory))
      $dirArray[] = $entryName;

   // close directory
   closedir($myDirectory);

   //	count elements in array
   $indexCount	= count($dirArray);

   // sort 'em
   natcasesort($dirArray);

   //Needs to be done since the sort is relative. This reassigns all keys.
   $dirArray = array_values($dirArray); 

   // print 'em
   print("<ul class=whitelinks>\n");

   // loop through the array of files and print them all
   print("<li>$indexCount files</li><li>---------------------------------------</li>\n");

   for($index=0; $index < $indexCount; $index++) {
      // don't list hidden files
      if (substr("$dirArray[$index]", 0, 1) != "." 
       && $dirArray[$index] != "index.php"
       && $dirArray[$index] != "style.css"
      ) {
         print("<li class='item'><a href=\"$dirArray[$index]\">$dirArray[$index]</a>");
         print("<div class='type'> - ");
         print(date ("F d Y H:i:s.", filemtime($dirArray[$index])) + "</div>");
         print("<div class='size'> - ");
         print(filesize($dirArray[$index]));
         print("b </div></li>\n");
      }
   }

   print("</ul>\n");

   ?>
   </body>
</html>
