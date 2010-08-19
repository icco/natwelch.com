<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Fever&deg;</title>
<meta http-equiv="X-UA-Compatible" content="chrome=1" />
<link rel="apple-touch-icon" href="firewall/app/images/webclip<?php e($this->is_ipad ? '-ipad':''); ?>.png" />
<link rel="shortcut icon" type="image/png" href="firewall/app/images/favicon.png" />
<?php if($this->prefs['share']):?>
<link type="application/rss+xml" rel="alternate" title="Saved Items" href="./?rss=saved" />
<?php endif;?>
<link rel="stylesheet" type="text/css" href="firewall/app/views/default/styles/page.css?v=<?php e($this->version);?>" />
<script type="text/javascript" src="firewall/app/views/default/scripts/fever.js?v=<?php e($this->version);?>"></script>
</head>
<body>
<div class="page">
	<div class="box">
		<div class="content">