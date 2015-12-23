import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell', 'input'],

  focusOut(e) {
    var value = String(e.target.value).trim().replace(/\./g, '');

    this.get('updateCategory')(this.category, 'budgetAmount', parseInt(value));
  },

  budgetAmount: Ember.computed('category.budgetAmount', function() {
    var number = this.category.get('budgetAmount');
    return (number * 0.01).toFixed(2);
  })
});
