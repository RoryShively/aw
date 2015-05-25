$(document).ready(function() {

	jQuery.fn.revealOnLoad = function(delay, direction, duration) {

		return this.each(function() {

			if (direction == "right") {

				$(this).delay(delay)
				.css({
					"opacity"		: 0,
					"margin-right"	: "-100px"
				})
				.delay(400)
				.animate({
					"opacity"		: 1,
					"margin-right"	: 0
				}, duration);

			};

			if (direction == "left") {

				$(this).delay(delay)
				.css({
					"opacity"		: 0,
					"margin-right"	: "100px"
				})
				.delay(400)
				.animate({
					"opacity"		: 1,
					"margin-right"	: 0
				}, duration);

			};	

		});

	} // end revealOnLoad function here

	$('*[data-selector="logo"]').css("opacity", 0).delay(400).animate({"opacity" : 1}, 600);
	$('*[data-selector="li1"]').revealOnLoad(800, "right", 400);
	$('*[data-selector="li2"]').revealOnLoad(900, "right", 400);
	$('*[data-selector="li3"]').revealOnLoad(1000, "right", 400);
	$('*[data-selector="li4"]').revealOnLoad(1100, "right", 400);
	$('*[data-selector="bottom-arrow"]').delay(2000).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);


});