

i18n.init({ fallbackLng: 'en' });

i18n.init({ lng: 'fr' }, function(t) {
  // translate nav
  $('.content').i18n();
	

	var source   = $('#entry-template').html();
	var template = Handlebars.compile(source);  
	var context = { msg: 'Plop'};
	var html    = template(context);


	var node = $(html);
	node.i18n();
	node.insertAfter('.content');

	//$(html).insertAfter('.content');
	//$('h3').i18n();

  /*
  i18n.setLng('en', function(t) {
  	$('.content').i18n();
  });
	*/

  // programatical access
  //var appName = t("app.name");
});

$(document).ready(function() {
	if (Modernizr.csstransforms3d) {
  		// CSS 3D Transforms supported
  		console.log('CSS 3D Transforms supported');
	} else {
  		// not supported
  		console.log('CSS 3D Transforms not supported');
	}


	var container = $('#memoryContainer');
	
	for (var i = 0; i < 4; i++) {
		var html = '<div class="cardContainer"><div class="card"><div class="face front"></div><div class="face back"></div></div></div>';
		//var html = '<div class="card"></div>';
		var card = $(html);
		card.find('.card').on('click', function() {
			var target = $(this);
			target.toggleClass('flipped');
		});
		container.append(card);	
	}
});