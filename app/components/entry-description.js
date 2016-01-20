import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const id = this.get('entry').id;
    const value = String(e.target.value).trim();
    this.attrs.entryChanged(id, 'description', value);
  }
});
