<?php
require_once("../PHP/phpFlickr/phpFlickr.php");
// Create new phpFlickr object
$f = new phpFlickr("7efc21b5b08233efb4e39f9d010c065c");

$person = $f->people_findByUsername("Nat W");

echo "<p>My most interesting:<br>\n";
// Search for most interesting by user_id (in this case, mine)
$photos_mine = $f->photos_search(array("user_id"=>$person['id'], "sort"=>"interestingness-desc", "per_page"=>6));
foreach ((array)$photos_mine['photo'] as $photo) {
    // Build image and link tags for each photo
    echo "<a href=http://www.flickr.com/photos/$photo[owner]/$photo[id]>";
    echo "<img border='0' alt='$photo[title]' ".
        "src=" . $f->buildPhotoURL($photo, "Square") . ">";
    echo "</a>";
}
echo "</p>\n";

echo "<p>Most interesting photos tagged with \"red\":<br>\n";
// Search by the single tag "red"
$photos_red = $f->photos_search(array("tags"=>"red", "sort"=>"interestingness-desc", "per_page"=>6));
foreach ((array)$photos_red['photo'] as $photo) {
    // Build image and link tags for each photo
    echo "<a href=http://www.flickr.com/photos/$photo[owner]/$photo[id]>";
    echo "<img border='0' alt='$photo[title]' ".
        "src=" . $f->buildPhotoURL($photo, "Square") . ">";
    echo "</a>";
}
echo "</p>\n";

echo "<p>Most interesting in a full text search for \"cat\":<br>\n";
// Search for most interesting photos with the text "cat"
$photos_cat = $f->photos_search(array("text"=>"cat", "sort"=>"interestingness-desc", "per_page"=>6));
foreach ((array)$photos_cat['photo'] as $photo) {
    // Build image and link tags for each photo
    echo "<a href=http://www.flickr.com/photos/$photo[owner]/$photo[id]>";
    echo "<img border='0' alt='$photo[title]' ".
        "src=" . $f->buildPhotoURL($photo, "Square") . ">";
    echo "</a>";
}
echo "</p>\n";

echo "<p>Most interesting photos today:<br>\n";
// Search for most interesting photos of today
$photos_interesting = $f->interestingness_getList(NULL, NULL, 6);
foreach ((array)$photos_interesting['photo'] as $photo) {
    // Build image and link tags for each photo
    echo "<a href=http://www.flickr.com/photos/$photo[owner]/$photo[id]>";
    echo "<img border='0' alt='$photo[title]' ".
        "src=" . $f->buildPhotoURL($photo, "Square") . ">";
    echo "</a>";
}
echo "</p>\n";

?> 