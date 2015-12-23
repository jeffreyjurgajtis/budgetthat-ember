import Ember from 'ember';

export default Ember.Helper.helper(function(number) {
  return (number * 0.01).toFixed(2);
});
