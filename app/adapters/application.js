import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:custom',

  host: 'http://localhost:3000',

  pathForType: function(type) {
    var pluralizedType = Ember.String.pluralize(type);
    return Ember.String.underscore(pluralizedType);
  }
});
