import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  focusOut(e) {
    var value = String(e.target.value)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.get('updateEntry')(this.entry, 'occurredOn', value);
  },

  amount: Ember.computed('entry.amount', function() {
    var number = this.entry.get('amount');
    return (number * 0.01).toFixed(2);
  })
});
