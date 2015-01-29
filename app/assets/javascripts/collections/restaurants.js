Eatlo.Collections.Restaurants = Backbone.Collection.extend({
	url: "/restaurants",
  model: Eatlo.Models.Restaurant,

  getOrFetch: function(id) {
  	var restaurant = this.get(id)
  	var restaurants = this
  	if(!restaurant){
  		restaurant = new Eatlo.Models.Restaurant({ id: id })
  		restaurant.fetch({
  			success: function(){
  				restaurants.add(restaurant)
  			}
  		})
  	} else {
  		restaurant.fetch()
  	}

  	return restaurant
  }


});

  Eatlo.Collections.restaurants = new Eatlo.Collections.Restaurants();
  Eatlo.Collections.restaurants.fetch();