import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    const budgetSheetId = snapshot.record.get('budgetSheet.id');
    const host = Ember.get(this, 'host');

    return `${host}/budget_sheets/${budgetSheetId}/entries/import`;
  }
});
