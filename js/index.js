$('document').ready(function() {
	var options = { videoId: 'ZeQnSnwV6iY', start: 3 };
	$('.wrapper').tubular(options);
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia
	$('.tubular-volume-up').hide();
	$('.tubular-mute').on('click', function(event) {
		event.preventDefault();
		$('.tubular-volume-up').show();
		$('.tubular-mute').hide();
	});
	$('.tubular-volume-up').on('click', function(event) {
		event.preventDefault();
		$('.tubular-mute').show();
		$('.tubular-volume-up').hide();
	});

	$('.tubular-play').hide();
	$('.tubular-pause').on('click', function(event) {
		event.preventDefault();
		$('.tubular-play').show();
		$('.tubular-pause').hide();
	});
	$('.tubular-play').on('click', function(event) {
		event.preventDefault();
		$('.tubular-pause').show();
		$('.tubular-play').hide();
	});





});