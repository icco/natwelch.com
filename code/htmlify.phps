/**
Basically is used to convert plain text to html.
@author Nat Welch
*/

function htmlify($str)
{
	// replace special characters with HTML entities
	$html = htmlspecialchars($str);
	
	//paragraph-ise
	$html = "<p>" . str_replace("\n\n", "</p>\n<p>", $html) . "</p>";

	// replace multiple spaces with single spaces
	$html = preg_replace('/\s\s+/', ' ', $html);

	// replace URLs with <a href...> elements
	$html = preg_replace('/\s(\w+:\/\/)(\S+)/', ' <a href="\\1\\2" title="\\2">\\1\\2</a>', $html);
	
	return $html;
}