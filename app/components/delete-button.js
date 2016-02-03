import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  click() {
    const id = this.get('id');
    this.attrs.recordDeleted(id);
  }
});
