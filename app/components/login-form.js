import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('email', 'password');

      this.get('session')
        .authenticate('authenticator:custom', credentials)
        .then(function() {
      }, function() {
        console.log('authentication failed!');
      });

    }
  }
});
