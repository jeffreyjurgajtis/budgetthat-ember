import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  occurredOnValid: true,
  descriptionValid: true,
  amountValid: true,
  occurredOnInvalid: Ember.computed.not('occurredOnValid'),
  descriptionInvalid: Ember.computed.not('descriptionValid'),
  amountInvalid: Ember.computed.not('amountValid'),
  valid: Ember.computed.and('occurredOnValid', 'descriptionValid', 'amountValid'),

  occurredOn: new Date(),

  submit(e) {
    e.preventDefault();

    const occurredOn  = this.dateToMoment(this.get('occurredOn'));
    const description = this.get('description');
    const categoryId  = e.target.getElementsByTagName('select')[0].value;
    let amount        = String(this.get('amount'))
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');
    amount = parseInt(amount);

    if (this.validate(occurredOn, description, amount)) {
      this.attrs.entryAdded(
        occurredOn.toDate(),
        description,
        categoryId,
        amount
      );

      this.set('description', '');
      this.set('amount', '');
      this.$('input.textfield--long').focus();
    }
  },

  validate: function(occurredOn, description, amount) {
    if (!occurredOn.isValid()) {
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
  },

  dateToMoment(date) {
    if (Ember.isBlank(date)) {
      return moment(date, "MM/DD/YYYY");
    } else {
      return moment(date.toLocaleDateString(), "MM/DD/YYYY");
    }
  }
});
