Eatlo.Views.RestaurantShow = Backbone.View.extend({
  template: JST['restaurants/show'],

  render: function () {
    var renderedContent = this.template({
      restaurant: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});