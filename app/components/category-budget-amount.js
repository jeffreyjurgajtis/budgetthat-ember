import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell', 'input'],

  focusOut(e) {
    var id    = this.category.get('id');
    var value = String(e.target.value).trim().replace(/\./g, '');

    this.get('updateCategory')(id, 'budgetAmount', value);
  },

  budgetAmount: function() {
    var number = this.category.get('budgetAmount');
    return (number * 0.01).toFixed(2);
  }.property('category.budgetAmount')
});
