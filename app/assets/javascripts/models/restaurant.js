Eatlo.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "/restaurants",

	initialize: function() {
		this.score = this.calculateScore();
	},

	calculateScore: function () {
		var count = 0;
		var sum = 0;
		this.reviews.each(function(review){
			count = count + 1;
			sum = sum + parseInt(review.escape('score'));
		})

		return sum/count
	},
	
	parse: function (response) {
		if (response.reviews){
			this.reviews = new Eatlo.Collections.Reviews(response.reviews);
			delete response.reviews;
		}
		return response;
	}
})