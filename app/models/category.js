import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name:          DS.attr('string'),
  budgetAmount:  DS.attr('number'),
  budgetSheet:   DS.belongsTo('budget-sheet'),
  entries:       DS.hasMany('entry'),

  entryTotals: Ember.computed.mapBy('entries', 'amount'),
  total: Ember.computed.sum('entryTotals'),

  difference: Ember.computed('budgetAmount', 'total', function() {
    return this.get('budgetAmount') - this.get('total');
  })
});
