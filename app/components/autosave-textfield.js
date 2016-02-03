import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const value = String(e.target.value).trim();
    const attributeName = this.get('attributeName');
    const recordId = this.get('recordId');
    this.attrs.recordChanged(recordId, attributeName, value);
  }
});
