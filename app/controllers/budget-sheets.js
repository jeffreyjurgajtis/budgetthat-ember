import Ember from 'ember';

export default Ember.Controller.extend({
  budgetSheetOrder: ['createdAt:asc'],
  sortedBudgetSheets: Ember.computed.sort('budgetSheets', 'budgetSheetOrder'),

  actions: {
    addBudgetSheet(name) {
      const flashMessages = Ember.get(this, 'flashMessages');

      let budgetSheet = this.store.createRecord('budget-sheet', {
        name: name,
      });

      budgetSheet.save().then(function() {
        flashMessages.success('Saved.');
      });
    }
  }
});
