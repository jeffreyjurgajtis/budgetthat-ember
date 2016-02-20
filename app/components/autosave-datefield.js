import Ember from 'ember';
import moment from 'moment';
import PikadayInputComponent from 'ember-pikaday/components/pikaday-input';

export default PikadayInputComponent.extend({
  classNames: ['textfield'],
  classNameBindings: ['isInvalid:textfield--error'],
  theme: 'datepicker',
  format: 'MM/DD/YYYY',
  placeholder: 'MM/DD/YYYY',

  value: Ember.computed('attributeValue', function() {
    return this.get('attributeValue');
  }),

  focusIn() {
    this.set('isInvalid', false);
  },

  onPikadayClose() {
    this._super();

    const recordId = this.get('recordId');
    const attributeName = this.get('attributeName');
    const date = this.dateToMoment(this.get('value'));

    if (date.isValid()) {
      this.attrs.recordChanged(recordId, attributeName, date.toDate());
    } else {
      this.set('isInvalid', true);
    }
  },

  dateToMoment(date) {
    const format = this.get('format');

    if (Ember.isBlank(date)) {
      return moment(date, format);
    } else {
      return moment(date.toLocaleDateString(), format);
    }
  }
});
