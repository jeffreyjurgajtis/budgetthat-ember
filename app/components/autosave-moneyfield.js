import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],
  inputInvalid: false,

  focusIn() {
    this.set('inputInvalid', false);
  },

  focusOut(e) {
    const attributeName = this.get('attributeName');
    const recordId = this.get('recordId');
    let value = String(e.target.value)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');
    value = parseInt(value);

    if (Number.isInteger(value)) {
      this.attrs.recordChanged(recordId, attributeName, value);
    } else {
      this.set('inputInvalid', true);
    }
  },

  amount: Ember.computed('attributeValue', function() {
    let number = this.get('attributeValue');
    return (number * 0.01).toFixed(2);
  })
});
