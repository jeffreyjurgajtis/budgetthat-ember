import Ember from 'ember';

export default Ember.Component.extend({
  submit(e) {
    e.preventDefault();
    let budgetAmount = String(this.budgetAmount)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.attrs.categoryAdded(this.name, parseInt(budgetAmount));

    this.set('name', '');
    this.set('budgetAmount', '');
    this.$('input.category-name').focus();
  }
});
