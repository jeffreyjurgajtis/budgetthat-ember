import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  classNames: ['login'],

  submit(e) {
    e.preventDefault();
    const flashMessages = this.get('flashMessages');
    const credentials = this.getProperties('email', 'password');

    let promise = this.get('session')
      .authenticate('authenticator:custom', credentials);

    this.set('currentlyLoading', true);

    promise.then(null, (error) => {
      Ember.run.later(() => {
        this.set('currentlyLoading', false);
      }, 400);

      flashMessages.failure('Invalid email/password.');
    });
  }
});
