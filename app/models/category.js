import DS from 'ember-data';

export default DS.Model.extend({
  name:          DS.attr('string'),
  budgetAmount:  DS.attr('number'),
  budgetSheet:   DS.belongsTo('budget-sheet'),
  entries:       DS.hasMany('entry'),

  entryAmountTotal: function() {
    var entries = this.get('entries');

    return entries.reduce(function(previousValue, entry){
        return previousValue + entry.get("amount");
    }, 0);
  }.property('entries.@each.amount'),

  entryTotalDifference: function() {
    return this.get('budgetAmount') - this.get('entryAmountTotal');
  }.property('budgetAmount', 'entryAmountTotal')
});
