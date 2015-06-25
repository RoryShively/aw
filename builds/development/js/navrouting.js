$(window).load(function() {
	// executes when complete page is fully loaded, including all frames, objects and images
	// var pilotdistance = $('*[data-selector="splash1"]').offset().top;
	// alert(pilotdistance);

	$('*[data-selector="li1"]').click( function() {
		scrollpilot();
	});

	$('*[data-selector="li2"]').click( function() {
		scrollscenes();
	});

	$('*[data-selector="li3"]').click( function() {
		scrollcrew();
	});

	$('*[data-selector="li4"]').click( function() {
		alert("no gellery section yet");
		scrollgallery();
	});

	scrollpilot = function() {
		var pilotdistance = $('*[data-selector="splash2"]').offset().top;

		$("body,html").animate({
			scrollTop: (pilotdistance + 90)
		}, 500);
	};

	scrollscenes = function() {
		var scenesdistance = $('*[data-selector="splash3"]').offset().top;

		$("body,html").animate({
			scrollTop: (scenesdistance + 90)
		}, 500);
	};

	scrollcrew = function() {
		var crewdistance = $('*[data-selector="splash4"]').offset().top;

		$("body,html").animate({
			scrollTop: (crewdistance + 90)
		}, 500);
	};

	scrollgallery = function() {
		var gallerydistance = $('*[data-selector="splash5"]').offset().top;

		$("body,html").animate({
			scrollTop: (gallerydistance + 90)
		}, 500);
	};

});