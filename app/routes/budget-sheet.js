import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('budget-sheet', params.budgetSheetId);
  },

  setupController(controller, model) {
    controller.set('budgetSheet', model);
    controller.set('categories', model.get('categories'));
  }
});
