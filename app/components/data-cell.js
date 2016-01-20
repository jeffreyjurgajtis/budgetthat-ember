import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['data-cell'],

  classNameBindings: [
    'isNegative:data-cell--negative',
    'alignRight:data-cell--align-right',
    'isBold:data-cell--bold'
  ],

  isNegative: Ember.computed(function() {
    return this.amount < 0;
  }).property('amount')
});
