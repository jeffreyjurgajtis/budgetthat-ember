import DS from 'ember-data';

export default DS.Model.extend({
  name:       DS.attr('string'),
  createdAt:  DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  categories: DS.hasMany('category'),
  income:     DS.attr('number', { defaultValue: 0 }),
  displaySavings: DS.attr('boolean', { defaultValue: true })
});
