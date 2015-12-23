import Ember from 'ember';

export default Ember.Component.extend({
  submit(e) {
    e.preventDefault();
    var budgetAmount = String(this.budgetAmount).trim().replace(/\./g, '');

    this.get('addCategory')(this.name, parseInt(budgetAmount));
    this.set('name', '');
    this.set('budgetAmount', '');
  }
});
