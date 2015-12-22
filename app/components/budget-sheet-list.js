import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['createdAt:desc'],

  budgetSheets: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    transitionToSheet(budgetSheetId) {
      this.get('transitionToSheet')(budgetSheetId);
    }
  }
});
