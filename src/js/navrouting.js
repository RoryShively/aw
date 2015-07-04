$(window).load(function() {

	// ****** Fires Navigation On Anchor Click ******

	$('*[data-selector="li1"]').click( function() {
		scrollNav('splash2');
	});

	$('*[data-selector="li2"]').click( function() {
		scrollNav('splash3');
	});

	$('*[data-selector="li3"]').click( function() {
		scrollNav('splash4');
	});

	$('*[data-selector="li4"]').click( function() {
		scrollNav('splash5');
	});

	// ****** Sets Width Of Window ******

	var windowWidth = $( window ).width();
	$( window ).resize( function() {
		windowWidth = $( window ).width();
		console.log( windowWidth );
	});

	// ****** Function That Controls Scroll Navigation Destination And Speed ******
	
	scrollNav = function(section) {

		// ****** Set Dynamic Var ******
		var sectiondistance = $('*[data-selector=' + section).offset().top;
		if( windowWidth >= 600 ) {
			sectiondistance = sectiondistance + 90
		} else {
			sectiondistance = sectiondistance + 40
		}
		// ****** /Set Dynamic Var ******

		var scroll = $( document ).scrollTop();

		// ****** Set Dynamic Var ******
		var absdistance = 0;
		if( scroll >= sectiondistance ) {
			absdistance = ( scroll - sectiondistance );
		} else {
			absdistance = ( sectiondistance - scroll );
		}
		// ****** /Set Dynamic Var ******



		var scrollspeed = ( ( absdistance * 0.2 ) + 300 );

		$("body,html").animate( { scrollTop: (sectiondistance) }, scrollspeed, 'linear');
		
	};

});