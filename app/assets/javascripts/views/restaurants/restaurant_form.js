Eatlo.Views.RestaurantForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['restaurants/form'],

  events: {
    'click button': 'submit'
  },

  render: function () {
    var renderedContent = this.template({
      restaurant: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();

    function success () {
      Backbone.history.navigate("", { trigger: true });
    }

    this.model.set(attrs);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: success
      });
    } else {
      this.model.save({}, {
        success: success
      });
    }
  }
});