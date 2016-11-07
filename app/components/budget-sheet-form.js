import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'hidden-on-device' ],

  nameValid: true,
  nameInvalid: Ember.computed.not('nameValid'),

  focusIn() {
    this.set('nameValid', true);
  },

  submit(e) {
    e.preventDefault();

    if (Ember.isPresent(this.name)) {
      this.get('addBudgetSheet')(this.name);
      this.set('name', '');
    } else {
      this.set('nameValid', false);
    }
  }
});
