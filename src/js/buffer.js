window.onload = function() {
	$bufferheight = $('*[data-selector="header"]').height();

	$('*[data-selector="buffer"]').css( "height", $bufferheight );
};

$(window).on('resize', function() {
	$bufferheight = $('*[data-selector="header"]').height();

	$('*[data-selector="buffer"]').css( "height", $bufferheight );
});
