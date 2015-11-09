import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(sessionData, setRequestHeader) {
    setRequestHeader("X-ACCESS-TOKEN", sessionData.access_token);
  }
});
