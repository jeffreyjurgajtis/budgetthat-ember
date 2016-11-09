import Ember from 'ember';

export default Ember.Controller.extend({
  budgetSheetOrder: ['createdAt:desc'],
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
    },

    deleteBudgetSheet(id) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let budgetSheet = this.store.peekRecord('budget-sheet', id);

      if (confirm('Are you sure?')) {
        budgetSheet.destroyRecord().then(function() {
          flashMessages.success('Saved.');
        });
      }
    }
  }
});
