import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  // controllers are deprecated; session should be accessible some other way
  setupController: function() {
    this.controller.set('session', this.get('session'));
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },

    sessionRequiresAuthentication: function() {
      this.transitionTo('login');
    }
  },
});
