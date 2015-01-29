Eatlo.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	routes:{
		"":"restaurantIndex",
		"restaurants/new": "newRestaurant",
		"restaurants/:id": "showRestaurant",
		"restaurants/:id/edit": "editRestaurant",
		"review/new": "newReview",
	},

	restaurantIndex: function() {

		var restaurantsView = new Eatlo.Views.RestaurantsList({ 
			collection: Eatlo.Collections.restaurants
	  });
		this._swapView(restaurantsView);
	},

	editRestaurant: function (id) {
    var restaurant = Eatlo.Collections.restaurants.getOrFetch(id);

    var formView = new Eatlo.Views.RestaurantForm({
      model: restaurant
    });

    this._swapView(formView);
  },

  newRestaurant: function () {
    var newRestaurant = new Eatlo.Models.Restaurant();

    var formView = new Eatlo.Views.RestaurantForm({
      collection: Eatlo.Collections.restaurants,
      model: newRestaurant
    });

    this._swapView(formView);
  },

  newReview: function () {
  	var newReview = new Eatlo.Models.Review();
  	var formView = new Eatlo.Views.ReviewForm({
  		collection: Eatlo.Collections.reviews,
  		model: newReview
  	});

  	this._swapView(formView);
  },

  showRestaurant: function (id) {
    var restaurant = Eatlo.Collections.restaurants.getOrFetch(id);
    var formView = new Eatlo.Views.RestaurantShow({ model: restaurant });
    this._swapView(formView);
  },

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove()
		}
		this.$rootEl.html(view.render().$el)
		this.currentView = view
	}
})