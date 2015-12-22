import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    this.get('transitionToSheet')(this.budgetSheet.id);
  }
});
