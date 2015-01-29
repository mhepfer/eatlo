window.Eatlo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Eatlo.Routers.Router({
    	$rootEl: $(content)
    })
  }
};

$(document).ready(function(){
  Eatlo.initialize();
});
