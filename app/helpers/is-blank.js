import Ember from 'ember';

const isBlank = (params) => Ember.isBlank(params[0]);

export default Ember.Helper.helper(isBlank);
