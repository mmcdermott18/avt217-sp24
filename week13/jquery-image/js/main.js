$(document).ready(function() {
    // run function on initial page load
	randomImage1();
});

function randomImage1() {
	var imgArray = [
		"img/Puffins-1.jpg",
		"img/Puffins-2.jpg",
		"img/Puffins-3.jpg",
		"img/Puffins-4.jpg",
		"img/Puffins-5.jpg",
		"img/Puffins-6.jpg",
		"img/Puffins-7.jpg",
		"img/Puffins-8.jpg"
	];
	var textArray = ["click", "press", "new", "go"];
	var randomNumber = Math.floor(Math.random() * imgArray.length);
	var randomText = Math.floor(Math.random() * textArray.length);
	console.log(randomNumber);
	// console.log(randomText);
	var image = imgArray[randomNumber];
	var text = textArray[randomText];
	console.log("imgArray[" + randomNumber + "]");
	console.log(image);
	// console.log(text);
	$('#puffin').attr('src', image);
	$('#new p').text(text);
	$('#new').click(function() {
		location.reload(true);
	});
}
function randomImage2() {
	var randomNumber = Math.floor(Math.random() * 8) + 1;
	console.log(randomNumber);
	var image = "img/Puffins-" + randomNumber + ".jpg";
	console.log(image);
	$('#puffin').attr('src', image);
	$('#new').click(function() {
		location.reload(true);
	});
}
