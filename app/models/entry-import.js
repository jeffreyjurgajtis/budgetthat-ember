import DS from 'ember-data';

export default DS.Model.extend({
  fileData:    DS.attr('string'),
  budgetSheet: DS.belongsTo('budget-sheet')
});
