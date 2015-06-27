$(window).load(function() {

	var splash1height = $('*[data-selector="splash1"]').height();
	function blackOutTop() {
		var scroll = $(document).scrollTop();

		if ( scroll < 620 ) {
			var headeropacity = ( scroll / splash1height );
			$('*[data-selector="blackoutheader"]').css("opacity", headeropacity);
		}
	}

	var blackOutPageIndex = 1
	
	$('*[data-selector="menuToggle"]').click(function(){
		blackOutPageIndex++;
		if(blackOutPageIndex % 2 == 0) {
			$('*[data-selector="blackOutPage"]').css("opacity", 0.5);
		} else {
			$('*[data-selector="blackOutPage"]').css("opacity", 0.9999);
		}
	});

	$(document).scroll(function() {
		blackOutTop();
	});

});
