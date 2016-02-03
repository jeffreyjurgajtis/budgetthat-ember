import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const recordId = this.get('recordId');
    const attributeName = this.get('attributeName');
    let value = String(e.target.value).trim();
    let newDate = new Date(value);
    this.attrs.recordChanged(recordId, attributeName, newDate);
  },
  
  dateFormatted: Ember.computed(function() {
    return this.get('attributeValue').toISOString().substring(0, 10);
  })
});
