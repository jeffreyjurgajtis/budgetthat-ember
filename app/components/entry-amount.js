import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const id = this.get('entry').id;
    const value = String(e.target.value)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.attrs.entryChanged(id, 'amount', parseInt(value));
  },

  amount: Ember.computed('entry.amount', function() {
    let number = this.entry.get('amount');
    return (number * 0.01).toFixed(2);
  })
});
