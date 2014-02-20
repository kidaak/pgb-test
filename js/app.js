$(document).ready(function() {
	var slider = new PageSlider($('#container'));

	/*
	var page1 = $('<div><div class="page1"></div></div>');
	slider.slidePageFrom(page1, "left");
	var page2 = $('<div><div class="page2"></div></div>');
	slider.slidePageFrom(page2, "right");
	*/

	var model = new app.AppModel();


	var router = new app.Router();
	router.slider = slider; // By argument ??
	Backbone.history.start();
});

var app = app || {};

app.AppModel = Backbone.Model.extend({

	defaults: {
		name: 'Tom'
	}

});

app.Page1View = Backbone.View.extend({

	initialize: function() {
		this.template = '<div class="page1"><a class="link" href="#page2">page 2</a></div>';
		this.render();
		this.listenTo(this.model, 'change:name', this.nameChanged);
	},

	render: function() {
		this.$el.html(this.template);
		return this;
	},

	events: {
		'click .link': 'link'
	},

	link: function() {
		console.log('link');
		this.model.set('name', 'Adele');
		//return false;
	},

	nameChanged: function() {
		console.log('name changed');
		console.log(this.model.get('name'));
	}

});

app.Router = Backbone.Router.extend({

	initialize: function() {
		this.model = new app.AppModel();
	},

	routes: {
		"": "welcome",
		"page2": "page2"
	},

	welcome: function() {
		var view = new app.Page1View({
			model: this.model
		});
		this.slider.slidePageFrom(view.$el, "left");
	},

	page2: function() {
		var page2 = $('<div><div class="page2"></div></div>');
		this.slider.slidePageFrom(page2, "right");
		
		$.get('data/quiz/quiz1.json', function(data) {
			console.log(data);
			var source = '<ul>{{#each answers}}<li>{{this}}</li>{{/each}}</ul>';
			var template = Handlebars.compile(source);
			page2.find('.page2').html(template(data[0]));
			page2.find('.page2').swipeRight(function() {
				//console.log('swipeRight');
				//window.history.back();
			});
			page2.find('.page2').swipeLeft(function() {
				//console.log('swipeLeft');
			});	
		});
		
		// Create and setup the menu
		page2.css('overflow', 'hidden');
		var $menu = $('<div></div>', {
			'class': 'menu'
		}).appendTo(page2);
		var $menuList = $('<ul></ul>').appendTo($menu);
		for (var i = 0; i < 40; i++) {
			$item = $('<li>one country</li>').addClass('menuItem').appendTo($menuList);
			$item.on('click', function(evt) {
				//evt.preventDefault();
				event.stopPropagation()
				$target = $(this);
				$menuList.find('li').removeClass('selected');
				$target.addClass('selected');
				$menu.removeClass('visible');
			});
		}

		page2.swipeRight(function() {
			if (!$menu.hasClass('visible')) {
				$menu.addClass('visible');
			}
		});
	}

});