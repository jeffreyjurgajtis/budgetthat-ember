import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  amount:      DS.attr('number'),
  occurredOn:  DS.attr('string'),
  category:    DS.belongsTo('category')
});
