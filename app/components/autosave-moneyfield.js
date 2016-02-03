import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const attributeName = this.get('attributeName');
    const recordId = this.get('recordId');
    const value = String(e.target.value)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');
    this.attrs.recordChanged(recordId, attributeName, parseInt(value));
  },

  Amount: Ember.computed('attributeValue', function() {
    let number = this.get('attributeValue');
    return (number * 0.01).toFixed(2);
  })
});
