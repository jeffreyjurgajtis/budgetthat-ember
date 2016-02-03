import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut() {
    const value = this.get('attributeValue').trim();
    const attributeName = this.get('attributeName');
    const recordId = this.get('recordId');

    if (this.get('inputValid')) {
      this.attrs.recordChanged(recordId, attributeName, value);
    }
  },

  inputValid: Ember.computed(function() {
    let value = this.get('attributeValue').trim();
    return !!value;
  }).property('attributeValue'),

  inputInvalid: Ember.computed.not('inputValid')
});
