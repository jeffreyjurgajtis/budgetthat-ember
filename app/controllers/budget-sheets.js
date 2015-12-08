import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBudgetSheet(name) {
      var budgetSheet = this.store.createRecord('budget-sheet', {
        name: name,
      });

      budgetSheet.save();
    }
  }
});
