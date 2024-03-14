$(document).ready(function() {
    // run function on initial page load
	randomLink();
});

function randomLink() {
	var linkArray = [
		"https://www.google.com/",
		"https://www.bing.com/",
		"https://duckduckgo.com/?va=b&t=hc"
	];
	var number = Math.floor(Math.random() * linkArray.length);
	var link = linkArray[number];
	$('#new a').attr('href', link);
}
