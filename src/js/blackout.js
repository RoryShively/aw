$( window ).load(function() {

	// ****** Black Out Header On Scroll ******

	var splash1height = $('*[data-selector="splash1"]').height();

	$( window ).resize( function() {
		splash1height = $('*[data-selector="splash1"]').height();
		blackOutTop();
	});

	function blackOutTop() {
		var scroll = $(document).scrollTop();

		if ( scroll < 620 ) {
			var headeropacity = ( scroll / splash1height );
			$('*[data-selector="blackoutheader"]').css("opacity", headeropacity);
		}
	}

	$( document ).scroll(function() {
		blackOutTop();
	});


	// ****** Black Out When Menu Slides In ******

	var blackOutPageIndex = 1
	$('*[data-selector="menuToggle"]').click( function() {
		blackOutPageIndex++;
		if(blackOutPageIndex % 2 == 0) {
			$('*[data-selector="blackOutPage"]').css("opacity", 0.5);
		} else {
			$('*[data-selector="blackOutPage"]').css("opacity", 0.9999);
		}
	});

});
