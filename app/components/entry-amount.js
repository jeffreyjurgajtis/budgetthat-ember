import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entry-form__field-wrapper'],

  focusOut(e) {
    const value = String(e.target.value)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.attrs.entryChanged(this.get('entry'), 'amount', value);
  },

  amount: Ember.computed('entry.amount', function() {
    let number = this.entry.get('amount');
    return (number * 0.01).toFixed(2);
  })
});
