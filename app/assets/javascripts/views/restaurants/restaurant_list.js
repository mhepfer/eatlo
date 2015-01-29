Eatlo.Views.RestaurantsList = Backbone.View.extend({
	template: JST['restaurants/list'],

  events: {
    "click #delete": "destroyRestaurant"
  },

	initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },

	render: function() {
  	var newTemplate = this.template({ 
      restaurants: this.collection
    });
  	this.$el.html(newTemplate);
  	return this
  },

  destroyRestaurant: function(event){
    var $target = $(event.currentTarget);
    var restaurant = this.collection.get($target.attr("data-id"));
    restaurant.destroy()
  }
})