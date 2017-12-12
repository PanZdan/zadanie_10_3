

// var myInterval = setInterval(function() {
// 	// console.log(new Date ());
// }, 3000);

$(function() {
	
	var width = 400;
	var animationSpeed = 1000;
	var pause = 3000;

	var $carousel = $('#carousel ul');

	var moveSlide;

	setInterval (function() {
		var firstItem = $carousel.find("li:first");
		var lastItem = $carousel.find("li:last");
		
		$carousel.animate({'margin-left': '-='+width}, animationSpeed, function() {
			lastItem.after(firstItem);
			$carousel.css({marginLeft:0});
		});
	}, pause);
	
	// $('#previous_slide').click(function() {

	// 	moveSlide(setInterval);

	// });

	// $('#next_slide').click(function() {
	// });

});