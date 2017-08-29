<?php include_once('_inc/functions.php'); ?>

<!doctype html>
<html lang="en-US" class="no-js">
<head>
	<meta charset="UTF-8">
	<title>Bulma Playground</title>

	<link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="favicon.ico" rel="shortcut icon">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Monkeysports Testing Playground">

	<meta name="author" content="Gregory Thomason" />
	<meta name="copyright" content="© 2017 Gregory Thomason" />

    <!-- styles -->
    <link href="css/style.nested.css" rel="stylesheet" type="text/css">

    <!-- 3rd party scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
	<script src="//cdn.polyfill.io/v2/polyfill.min.js"></script>
	<script src="js/modernizr.js" type="text/javascript"></script>
	<script src="js/flexslider/jquery.flexslider.js" type="text/javascript"></script>

	<!-- site scripts -->
	<script src="js/bulma_extend.js" type="text/javascript"></script>

</head>
<body>
<div id="top" class="content-wrapper">

<nav class="navbar ">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			Bulma Documentation
		</a>

		<div class="navbar-burger burger" data-target="core-nav">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div id="core-nav" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item " href="/">Home</a>
			<a class="navbar-item " href="/forms.php">Forms</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="#">
					Dropdown Example
				</a>
				<div class="navbar-dropdown menu-active">
					<a class="navbar-item " href="/">
						<i class="fa fa-home margin-right-5" aria-hidden="true"></i>
						Home
					</a>
					<a class="navbar-item " href="/forms.php">
						<i class="fa fa-address-card-o margin-right-5" aria-hidden="true"></i>
						Forms
					</a>
				</div>
			</div>

			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="#">
					Dropdown Example s
				</a>
				<div class="navbar-dropdown">
					<a class="navbar-item " href="/">
						<i class="fa fa-home margin-right-5" aria-hidden="true"></i>
						Home
					</a>
					<a class="navbar-item " href="/forms.php">
						<i class="fa fa-address-card-o margin-right-5" aria-hidden="true"></i>
						Forms
					</a>
				</div>
			</div>
		</div>

		<div class="navbar-end">
			<a class="navbar-item is-hidden-desktop-only" href="/">
				<span class="icon is-large"><i class="fa fa-home"></i></span>
			</a>
		</div>

	</div>
</nav>
