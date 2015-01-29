Eatlo.Collections.Reviews = Backbone.Collection.extend({
	url: "reviews",
	
  model: Eatlo.Models.Review

});

  Eatlo.Collections.reviews = new Eatlo.Collections.Reviews();
  Eatlo.Collections.reviews.fetch();