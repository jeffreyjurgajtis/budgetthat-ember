import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name:          DS.attr('string'),
  budgetAmount:  DS.attr('number'),
  budgetSheet:   DS.belongsTo('budget-sheet'),
  entries:       DS.hasMany('entry', { async: false }),

  total: Ember.computed('entries.@each.amount', {
    get() {
      let entries = this.get('entries');

      return entries.reduce(function(previousValue, entry){
        return previousValue + entry.get('amount');
      }, 0);
    }
  }),

  difference: Ember.computed('budgetAmount', 'total', {
    get() {
      return this.get('budgetAmount') - this.get('total');
    }
  })
});
