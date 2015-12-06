import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    addCategory(name, budgetAmount) {
      this.get('store').createRecord('category', {
        name: name,
        budgetAmount: budgetAmount,
        budgetSheet: this.budgetSheet
      });
    }
  }
});
