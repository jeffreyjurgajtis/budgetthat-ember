import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  change(e) {
    const entryId = this.get('entry').id;
    const id = String(e.target.value).trim();
    const category = this.get('categories').findBy('id', id);
    this.attrs.entryChanged(entryId, 'category', category);
  }
});
