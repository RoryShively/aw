$(window).load(function() {

	var splash1height = $('*[data-selector="splash1"]').height();


	$(document).scroll(function() {

		var scroll = $(document).scrollTop();

		if ( scroll < 620 ) {
			var headeropacity = ( scroll / splash1height );
			$('*[data-selector="blackoutheader"]').css("opacity", headeropacity);
		}
	});

});
