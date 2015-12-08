import Ember from 'ember';

export default Ember.Component.extend({
  submit(e) {
    e.preventDefault();
    this.get('addBudgetSheet')(this.name);
    this.set('name', '');
  }
});
