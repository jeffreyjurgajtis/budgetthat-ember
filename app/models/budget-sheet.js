import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name:       DS.attr('string'),
  createdAt:  DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  categories: DS.hasMany('category', { async: true }),

  categoryTotals: Ember.computed.mapBy('categories', 'budgetAmount'),
  total: Ember.computed.sum('categoryTotals'),

  categoryEntryTotals: Ember.computed.mapBy('categories', 'total'),
  spent: Ember.computed.sum('categoryEntryTotals'),

  difference: Ember.computed('total', 'spent', function() {
    return this.get('total') - this.get('spent');
  })
});
