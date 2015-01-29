Eatlo.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "/restaurants",
	
	parse: function (response) {
		if (response.reviews){
			this.reviews = new Eatlo.Collections.Reviews(response.reviews);
			delete response.reviews;
		}
		return response;
	}
})