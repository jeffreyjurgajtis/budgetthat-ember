import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  amount:      DS.attr('number'),
  occurredOn:  DS.attr('date'),
  createdAt:  DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  category:    DS.belongsTo('category'),
});
