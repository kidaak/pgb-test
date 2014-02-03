'use strict';

var translations = {
	welcome_msg: 'Hello world!'
}

$(function() {
	return;
	localStorage.setItem('lastUpdate', new Date());

	$('#container').hide();
	if (localStorage.getItem('pages/page1.html')) {
		$('#container').html(localStorage.getItem('pages/page1.html'));
		translate();
		$('#container').fadeIn(1000);
	} else {
		$('#container').load('pages/page1.html', function(data) {
		localStorage.setItem('pages/page1.html', data)
		//$('#container').show();
		translate();
		$('#container').fadeIn(1000);
	});
	}

	$('#container').on('click', 'a', function() {
		var url = $(this).attr('href');
		$('#container').fadeOut(200, function() {
			$(this).load(url, function() {
				$(this).fadeIn(200);
			})
		});
		return false;
	});
});

function translate() {
	$('.i18n').each(function() {
		// if ($(this).attr('data-i18n')) {}
		$(this).text(translations[$(this).text()]);
	});
}
