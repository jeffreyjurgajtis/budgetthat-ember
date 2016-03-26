import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    createUser() {
      this.set('currentlyLoading', true);
      const flashMessages = Ember.get(this, 'flashMessages');
      const userProperties = this.getProperties('email', 'password');

      let session = this.get('session');
      let user = this.store.createRecord('user', userProperties);

      user.save().then((user) => {
        session.authenticate('authenticator:custom', userProperties);
      }, (response) => {
        Ember.run.later(() => {
          this.set('currentlyLoading', false);
        }, 400);

        flashMessages.failure(response.errors[0]);
      });
    }
  }
});
