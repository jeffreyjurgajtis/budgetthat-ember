import Ember from 'ember';

export default Ember.Component.extend({
  occurredOnValid: true,
  descriptionValid: true,
  amountValid: true,
  occurredOnInvalid: Ember.computed.not('occurredOnValid'),
  descriptionInvalid: Ember.computed.not('descriptionValid'),
  amountInvalid: Ember.computed.not('amountValid'),
  valid: Ember.computed.and('occurredOnValid', 'descriptionValid', 'amountValid'),

  submit(e) {
    e.preventDefault();
    let occurredOnS   = String(this.occurredOn).trim();
    const occurredOn  = new Date(occurredOnS);
    const description = this.description;
    const categoryId  = e.target.getElementsByTagName('select')[0].value;
    let amount        = String(this.amount)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');
    amount = parseInt(amount);

    if (this.validate(occurredOn, description, amount)) {
      this.attrs.entryAdded(occurredOn, description, categoryId, amount);
      this.set('occurredOn', '');
      this.set('description', '');
      this.set('amount', '');
      this.$('input.entry-occurred-on').focus();
    }
  },

  validate: function(occurredOn, description, amount) {
    if (String(occurredOn) === "Invalid Date") {
      this.set('occurredOnValid', false);
    }

    if (Ember.isBlank(description)) {
      this.set('descriptionValid', false);
    }

    if (!Number.isInteger(amount)) {
      this.set('amountValid', false);
    }

    return this.get('valid');
  },

  actions: {
    resetOccurredOnError() {
      this.set('occurredOnValid', true);
    },

    resetDescriptionError() {
      this.set('descriptionValid', true);
    },

    resetAmountError() {
      this.set('amountValid', true);
    }
  }
});
