$(document).ready(function() {
	$('*[data-selector="bottom-arrow"]').click(function() {
		$navoffset = $('*[data-selector="web-design"]').offset().top;
		$("body,html").animate({ scrollTop: ($navoffset + 2) }, 800);
	});
});