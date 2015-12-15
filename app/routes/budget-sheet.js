import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('budget-sheet', params.budgetSheetId);
  },

  setupController(controller, model) {
    var route = this;
    controller.set('model', model);

    model.get('categories').then(function(categories) {
      controller.set('categories', categories);
      controller.set('entries', route.entries(categories.getEach('id')));
    });
  },

  entries(categoryIds) {
    return this.store.peekAll('entry').filter(function(entry) {
      return categoryIds.contains(entry.get('category').get('id'));
    });
  }
});
