import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  click(e) {
    const entryId = this.get('entry').id;
    this.attrs.entryRemoved(entryId);
  }
});
