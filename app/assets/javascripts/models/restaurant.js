Eatlo.Models.Restaurant = Backbone.Model.extend({
	urlRoot: "/restaurants",

	initialize: function() {
		this.score = this.calculateScore();
	},

	calculateScore: function () {
		if(typeof this.reviews !== "undefined"){

			var count = 0;
			var sum = 0;
			this.reviews.each(function(review){
				count = count + 1;
				sum = sum + parseInt(review.escape('score'));
			})

			return sum/count
		}
		return 0
	},
	
	parse: function (response) {
		if (response.reviews){
			this.reviews = new Eatlo.Collections.Reviews(response.reviews);
			delete response.reviews;
		}
		return response;
	}
})