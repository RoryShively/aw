$(document).ready(function() {
	
	$headerheight = $('*[data-selector="header"]').height();

	$(document).scroll(function() {
		$scrollheight = $(document).scrollTop();
		$opacity = (($headerheight - $scrollheight) / $headerheight);
		$('*[data-selector="fade-to-black"]').css( "opacity", $opacity );
	});

});