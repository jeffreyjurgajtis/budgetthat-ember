import DS from 'ember-data';

export default DS.Model.extend({
  name:       DS.attr('string'),
  createdAt:  DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  categories: DS.hasMany('category', { async: true }),

  total: function() {
    return this.get('categories').reduce(function(previousValue, category){
      return previousValue + category.get('budgetAmount');
    }, 0);
  }.property('categories.@each.budgetAmount'),

  spent: function() {
    return this.get('categories').reduce(function(previousValue, category){
      return previousValue + category.get('entryAmountTotal');
    }, 0);
  }.property('categories.@each.entryAmountTotal'),

  difference: function() {
    return this.get('total') - this.get('spent');
  }.property('total', 'spent')
});
