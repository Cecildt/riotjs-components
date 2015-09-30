riot.tag('share-bar', '<div id="left-share-menu" class="left-social-menu"><a href="/" class="menu-home" alt="Home" title="View the home page."><span class="fa fa-home fa-lg"></span></a><a href="{ twitter }" class="menu-twitter" alt="Twitter" title="Share to Twitter." target="_blank"><span class="fa fa-twitter fa-lg"></span></a><a href="{ linkedin }" class="menu-linkedin" alt="Linkedin" title="Share to Linkedin." target="_blank"><span class="fa fa-linkedin fa-lg"></span></a><a href="{ facebook }" class="menu-facebook" alt="Facebook" title="Share to Facebook." target="_blank"><span class="fa fa-facebook fa-lg"></span></a><a href="{ reddit }" class="menu-reddit" alt="Reddit" title="Share to Reddit." target="_blank"><span class="fa fa-reddit fa-lg"></span></a><a href="{ google }" class="menu-google" alt="Google" title="Share to Google+." target="_blank"><span class="fa fa-google-plus fa-lg"></span></a><a href="{ email }" class="menu-email" alt="Email" title="Email this page." target="_blank"><span class="fa fa-envelope-o fa-lg"></span></a><a href="#" class="menu-print" alt="Print" title="Print this page." target="_blank" onclick="window.print();"><span class="fa fa-print fa-lg"></span></a><a href="#" class="menu-close" alt="Close" title="Close share menu" onclick="{ close }"><span class="fa fa-times fa-lg"></span></a></div>', '.left-social-menu{ display: block; float: left; left: 160px; right: auto; position: fixed; top: 25%; z-index: 100020; width: 48px; } .left-social-menu a { position: relative; display: block; width: 48px; line-height: 35px; margin: 0; padding: 8px 0; outline: none; text-align: center; overflow: hidden; text-decoration: none; } .left-social-menu a:hover { width: 64px; } .menu-home{ background-color: #72898C; color: #fff; } .menu-share{ background-color: #DC3C00; color: #fff; } .menu-twitter{ background-color: #2BA7D1; color: #fff; } .menu-linkedin{ background-color: #1D87BD; color: #fff; } .menu-facebook{ background-color: #305891; color: #fff; } .menu-reddit{ background-color: #FF4500; color: #fff; } .menu-google{ background-color: #D73D32; color: #fff; } .menu-email{ background-color: #72898C; color: #fff; } .menu-print{ background-color: #72898C; color: #fff; } .menu-close{ background-color: #72898C; color: #fff; } @media only screen and (max-width: 500px) { .left-social-menu { display: none; } }', function(opts) {
		'use strict';
		this.twitter = "http://twitter.com/intent/tweet?text=Read this: " + document.title + "&url=" + window.location.href;
		this.linkedin = "http://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href;
		this.facebook = "http://www.facebook.com/share.php?u=" + window.location.href;
		this.reddit = "http://reddit.com/submit?url=" + window.location.href + "&title=" + document.title;
		this.google = "https://plus.google.com/share?url=" + window.location.href;
		this.email = "mailto:name@email.com?Subject=" + document.title + "&amp;body=" + window.location.href;
		
		function close() {
			var menu = document.getElementById("left-share-menu");
			menu.style.display = "none";	
		}
		
	
});