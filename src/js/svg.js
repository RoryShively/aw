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

	var splash1height = $('*[data-selector="splash1"]').height();
	var menuIcon1 = new Snap('#menuIconBar1');
	var menuIcon2 = new Snap('#menuIconBar2');
	var menuIcon3 = new Snap('#menuIconBar3');

	function menuIconColor() {
		var scroll = $(document).scrollTop();
		var splash1height = $('*[data-selector="splash1"]').height();

		if ( scroll >= splash1height ) {
			menuIcon1.attr({
				fill: '#111111',
			});
			menuIcon2.attr({
				fill: '#111111',
			});
			menuIcon3.attr({
				fill: '#111111',
			});
			// menuIcon.animate({attr: "fill:'#111111'"}, 1000);
		} else {
			menuIcon1.attr({
				fill: '#ffffff',
			});
			menuIcon2.attr({
				fill: '#ffffff',
			});
			menuIcon3.attr({
				fill: '#ffffff',
			});
		}
	}

	$(document).scroll(function() {
		menuIconColor();
	});

});
