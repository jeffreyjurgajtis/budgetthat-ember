import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('budget-sheet', params.budgetSheetId);
  },

  setupController(controller, model) {
    controller.set('model', model);
  }
});
