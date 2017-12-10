

// var myInterval = setInterval(function() {
// 	// console.log(new Date ());
// }, 3000);

$(function() {
	
	var width = 400;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	var $carousel = $('#carousel');
	// var $slideContainer = $carousel.find('.slides');
	// var $slides = $slideContainer.find('.slide');
	
	
	setInterval(function() {
		var firstItem = $carousel.find("li:first");
		var lastItem = $carousel.find("li:last");
		currentSlide++;
		
		firstItem.animate({'margin-left': '-='+width}, animationSpeed, function() {
			 
			if(currentSlide === firstItem.length) {
				currentSlide = 1;
				// $slideContainer.css('margin-left', 0);
				lastItem.after(firstItem);
				$carousel.css({marginLeft:0});
			}
		});

	}, pause);

});