<?php

include 'obfuscate_ajax.php';

$exp1 = obfuscate_ajax('foo@bar.com', 1);
echo '<pre id="foob"></pre><strong>Link:</strong> ', $exp1, '<br /><br />';

$exp2 = obfuscate_ajax('some more random "text"');
echo '<strong>String:</strong> ', $exp2, '<br /><br />';

$exp3 = obfuscate_ajax('<span onload="this.innerHTML=\'foo\';">bar </span><script>document.write("hi!");</script> herro');
echo '<strong>Javascript:</strong> ', $exp3, '<br /><br />';

$source = htmlspecialchars($exp1);
echo '<strong>Source for link:</strong><pre>', $source, '</pre>';

$source = htmlspecialchars($exp2);
echo '<strong>Source for string:</strong><pre>', $source, '</pre>';

$source = htmlspecialchars($exp3);
echo '<strong>Source for javascript:</strong><pre>', $source, '</pre>';

?>
