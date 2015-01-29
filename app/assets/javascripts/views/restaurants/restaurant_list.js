Eatlo.Views.RestaurantsList = Backbone.View.extend({
	template: JST['restaurants/list'],

	render: function() {
  	var newTemplate = this.template({ 
      restaurants: Eatlo.Collections.restaurants 
    });
  	this.$el.html(newTemplate);
  	return this
  }
})