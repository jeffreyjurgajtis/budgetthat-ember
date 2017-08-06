import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('budget-sheet', params.budgetSheetId);
  },

  setupController(controller, model) {
    controller.set('budgetSheet', model);
    controller.set('currentlyLoading', true);

    model.get('categories').then(function(categories) {
      controller.set('categories', categories);

      model.get('entries').then(function(entries) {
        controller.set('entries', entries);
        controller.set('currentlyLoading', false);
      });
    });
  }
});
