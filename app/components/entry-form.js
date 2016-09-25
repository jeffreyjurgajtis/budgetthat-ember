import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  descriptionValid: true,
  amountValid: true,
  descriptionInvalid: Ember.computed.not('descriptionValid'),
  amountInvalid: Ember.computed.not('amountValid'),
  valid: Ember.computed.and('descriptionValid', 'amountValid'),
  isDisabled: Ember.computed.empty('categories'),

  submit(e) {
    e.preventDefault();

    const occurredOn  = moment()._d;
    const description = this.get('description');
    const categoryId  = e.target.getElementsByTagName('select')[0].value;
    let amount        = String(this.get('amount'))
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');
    amount = parseInt(amount);

    if (this.validate(description, amount)) {
      this.attrs.entryAdded(occurredOn, description, categoryId, amount);

      this.set('description', '');
      this.set('amount', '');
      this.$('input.textfield--super-long').focus();
    }
  },

  validate: function(description, amount) {
    if (Ember.isBlank(description)) {
      this.set('descriptionValid', false);
    }

    if (!Number.isInteger(amount)) {
      this.set('amountValid', false);
    }

    return this.get('valid');
  },

  actions: {
    resetDescriptionError() {
      this.set('descriptionValid', true);
    },

    resetAmountError() {
      this.set('amountValid', true);
    }
  },

  entriesNotEmpty: Ember.computed.notEmpty('entries')
});
