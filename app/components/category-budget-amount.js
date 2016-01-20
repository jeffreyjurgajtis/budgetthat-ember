import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const value = String(e.target.value)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.attrs.categoryChanged(this.get('category'), 'budgetAmount', parseInt(value));
  },

  budgetAmount: Ember.computed('category.budgetAmount', function() {
    let number = this.category.get('budgetAmount');
    return (number * 0.01).toFixed(2);
  })
});
