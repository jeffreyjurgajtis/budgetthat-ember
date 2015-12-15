import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCategory(name, budgetAmount) {
      var category = this.store.createRecord('category', {
        name: name,
        budget_amount: budgetAmount,
        budget_sheet: this.model
      });

      category.save();
    }
  }
});
