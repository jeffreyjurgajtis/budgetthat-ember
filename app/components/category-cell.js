import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell'],

  classNameBindings: ['isNegative'],

  isNegative: Ember.computed(function() {
    return this.amount < 0;
  }).property('amount')
});
