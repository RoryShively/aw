$(document).ready(function() {

	$('*[data-selector="wd-tn1"]').click(function() {
		$('*[data-selector*="wd-lg"]').css( "display", "none" );
		$('*[data-selector*="wd-lg1"]').css( "display", "block" );
	});
	
	$('*[data-selector="wd-tn2"]').click(function() {
		$('*[data-selector*="wd-lg"]').css( "display", "none" );
		$('*[data-selector*="wd-lg2"]').css( "display", "block" );
	});

	$('*[data-selector="wd-tn3"]').click(function() {
		$('*[data-selector*="wd-lg"]').css( "display", "none" );
		$('*[data-selector*="wd-lg3"]').css( "display", "block" );
	});
	
	$('*[data-selector="wd-tn4"]').click(function() {
		$('*[data-selector*="wd-lg"]').css( "display", "none" );
		$('*[data-selector*="wd-lg4"]').css( "display", "block" );
	});

	$('*[data-selector="gd-tn1"]').click(function() {
		$('*[data-selector*="gd-lg"]').css( "display", "none" );
		$('*[data-selector*="gd-lg1"]').css( "display", "block" );
	});
	
	$('*[data-selector="gd-tn2"]').click(function() {
		$('*[data-selector*="gd-lg"]').css( "display", "none" );
		$('*[data-selector*="gd-lg2"]').css( "display", "block" );
	});

	$('*[data-selector="gd-tn3"]').click(function() {
		$('*[data-selector*="gd-lg"]').css( "display", "none" );
		$('*[data-selector*="gd-lg3"]').css( "display", "block" );
	});
	
	$('*[data-selector="gd-tn4"]').click(function() {
		$('*[data-selector*="gd-lg"]').css( "display", "none" );
		$('*[data-selector*="gd-lg4"]').css( "display", "block" );
	});

});