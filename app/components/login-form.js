import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  classNames: ['login'],

  submit(e) {
    e.preventDefault();

    const flashMessages = this.get('flashMessages');
    let credentials = this.getProperties('email', 'password');

    this.get('session')
      .authenticate('authenticator:custom', credentials)
      .then(function() {
    }, function() {
      flashMessages.failure('Invalid email/password.');
    });
  }
});
