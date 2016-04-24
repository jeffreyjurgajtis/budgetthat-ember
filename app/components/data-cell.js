import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['data-cell'],

  classNameBindings: [
    'isNegative:data-cell--negative',
    'isPositive:data-cell--positive',
    'alignRight:data-cell--align-right',
    'isBold:data-cell--bold'
  ],

  isNegative: Ember.computed('amount', function() {
    return this.get('amount') < 0;
  }),

  amountPositive: Ember.computed('amount', function() {
    return this.get('amount') > 0;
  }),

  isPositive: Ember.computed.and('highlightPositive', 'amountPositive')
});
