Eatlo.Models.Review = Backbone.Model.extend({
	urlRoot: "/reviews",

	parse: function (response) {
		if (response.restaurant) {
			this.restaurant = new Eatlo.Models.Restaurant(response.restaurant);
			delete response.restaurant;
		}
		return response;
	}
	
})