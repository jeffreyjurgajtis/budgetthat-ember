import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  focusOut(e) {
    var value = String(e.target.value).trim();

    this.get('updateEntry')(this.entry, 'description', value);
  }
});
