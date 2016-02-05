import Ember from 'ember';

export default Ember.Component.extend({
  nameValid: true,
  amountValid: true,
  nameInvalid: Ember.computed.not('nameValid'),
  amountInvalid: Ember.computed.not('amountValid'),
  valid: Ember.computed.and('nameValid', 'amountValid'),

  budgetAmountInt: Ember.computed('budgetAmount', function() {
    let value = String(this.budgetAmount)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    return parseInt(value);
  }),

  submit(e) {
    e.preventDefault();
    let budgetAmount = this.get('budgetAmountInt');
    let name = this.name;

    if (Ember.isBlank(name)) {
      this.set('nameValid', false);
    }

    if (!Number.isInteger(budgetAmount)) {
      this.set('amountValid', false);
    }

    if (this.get('valid')) {
      this.attrs.categoryAdded(this.name, budgetAmount);
      this.set('name', '');
      this.set('budgetAmount', '');
      this.$('input.category-name').focus();
    }
  },

  actions: {
    resetNameError() {
      this.set('nameValid', true);
    },

    resetAmountError() {
      this.set('amountValid', true);
    }
  }
});
