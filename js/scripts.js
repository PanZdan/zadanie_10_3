$(function() {
	
	var width = 400;
	var animationSpeed = 1000;
	var pause = 3000;
	var $carousel = $('#carousel ul');
	var isPaused = false;
  
function start() {
  return interval = setInterval (function() {
		var firstItem = $carousel.find("li:first");
		var lastItem = $carousel.find("li:last");
		
		$carousel.animate({'margin-left': '-='+width}, animationSpeed, function() {
			lastItem.after(firstItem);
			$carousel.css({marginLeft:0});

		});
	}, pause);
}
 
start();
	$('#previous_slide').click(function() {
  
		var firstItem = $carousel.find("li:first");
		var lastItem = $carousel.find("li:last");
		firstItem.before(lastItem);
		$carousel.css({marginLeft:-400});
		$carousel.animate({'margin-left': '+='+width}, animationSpeed);
		
	});

	$('#next_slide').click(function() {
		var firstItem = $carousel.find("li:first");
		var lastItem = $carousel.find("li:last");
		$carousel.animate({'margin-left': '-='+width}, animationSpeed, function() {
			lastItem.after(firstItem);
			$carousel.css({marginLeft:0});
		});
	});

});

$('.slide').on('mouseover', function() {
 clearInterval(interval);
});

$('slide').on('mouseout', function() {
  start();
});

