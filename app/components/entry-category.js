import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  change(e) {
    const id = String(e.target.value).trim();
    const category = this.get('categories').findBy('id', id);
    this.attrs.entryChanged(this.get('entry'), 'category', category);
  }
});
