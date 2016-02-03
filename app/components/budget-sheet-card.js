import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['budget-sheet-card'],

  actions: {
    deleteBudgetSheet() {
      const budgetSheetId = this.get('budgetSheet').id;
      this.attrs.budgetSheetRemoved(budgetSheetId);
    }
  }
});
