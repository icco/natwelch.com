<?php

// We'll be outputting a PDF
header('Content-type: application/pdf');

// It will be called downloaded.pdf
header('Content-Disposition: attachment; filename="NathanielWelch.pdf"');

// The PDF source is in original.pdf
readfile('../resume.pdf');

?>
