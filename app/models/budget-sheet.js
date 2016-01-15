import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name:       DS.attr('string'),
  createdAt:  DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  categories: DS.hasMany('category', { async: true })
});
