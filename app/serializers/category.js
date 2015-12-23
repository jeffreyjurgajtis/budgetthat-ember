import Ember from 'ember';
import DS from 'ember-data';

var underscore = Ember.String.underscore;

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    entries: { embedded: 'always' }
  },

  keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship(rawKey) {
    return underscore(rawKey);
  },

  payloadKeyFromModelName(modelName) {
    return underscore(modelName);
  }
});