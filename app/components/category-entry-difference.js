import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['category-element', 'category-total-difference'],

  classNameBindings: ['isNegative'],

  isNegative: Ember.computed(function() {
    return this.entryTotalDifference < 0;
  }).property('entryTotalDifference')
});
