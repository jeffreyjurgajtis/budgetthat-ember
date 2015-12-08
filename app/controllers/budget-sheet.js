import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCategory(name, budgetAmount) {
      var category = this.store.createRecord('category', {
        name: name,
        budgetAmount: budgetAmount,
        budgetSheet: this.model
      });

      category.save();
    }
  }
});
