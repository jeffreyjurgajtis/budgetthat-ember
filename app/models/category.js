import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  budgetAmount: DS.attr('string'),
  budgetSheet:  DS.belongsTo('budget-sheet')
});
