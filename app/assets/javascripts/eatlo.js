window.Eatlo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Eatlo.Routers.Router({
    	$rootEl: $(content)
    })

    Backbone.history.start();
  }
};
