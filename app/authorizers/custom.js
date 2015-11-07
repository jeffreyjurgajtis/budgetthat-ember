import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    if (this.get('session.isAuthenticated')) {
      jqXHR.setRequestHeader('X-ACCESS-TOKEN', this.get('session.secure.access_token'));
    }
  }
});
