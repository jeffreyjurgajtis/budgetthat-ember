import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const value = String(e.target.value).trim();
    this.attrs.categoryChanged(this.get('category'), 'name', value);
  }
});
