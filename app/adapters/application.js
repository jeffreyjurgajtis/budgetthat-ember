import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:custom',

  host: config.apiHost,

  pathForType(type) {
    var pluralizedType = Ember.String.pluralize(type);
    return Ember.String.underscore(pluralizedType);
  }
});
