$(window).load(function() {

	// ******** SVG Animation For Down Arrow In Header ********

	var sArrow = new Snap('#sPointer')

	$('*[data-svg="arrow"]').mouseover(function() {
		sArrow.animate({transform: "T0,3"}, 1000, mina.elastic);
	});

	$('*[data-svg="arrow"]').mouseleave(function() {
		sArrow.animate({transform: ""}, 1000, mina.elastic);
	});

	// ******** SVG Animation For Menu Icon ********

	

});
