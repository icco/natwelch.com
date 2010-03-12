<?php

/** /
e('<div class="box">');
p($_GET);
e('</div');
/**/

$routes = array
(
	'groups',
	'links',
	'feeds',
	'items',
	'item'
);

if (isset($_GET['mobile']['route']) && in($routes, $_GET['mobile']['route']))
{
	$this->render('reader/'.$_GET['mobile']['route']);
}