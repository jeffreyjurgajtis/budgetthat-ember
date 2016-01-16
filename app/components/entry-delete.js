import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  click(e) {
    const entryId = this.get('entry').id;
    this.attrs.entryRemoved(entryId);
  }
});
