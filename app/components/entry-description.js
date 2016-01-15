import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  focusOut(e) {
    const value = String(e.target.value).trim();
    this.attrs.entryChanged(this.get('entry'), 'description', value);
  }
});
