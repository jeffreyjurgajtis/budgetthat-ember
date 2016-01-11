import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  change(e) {
    var id = String(e.target.value).trim();
    var category = this.categories.findBy('id', id);

    this.get('updateEntry')(this.entry, 'category', category);
  }
});
