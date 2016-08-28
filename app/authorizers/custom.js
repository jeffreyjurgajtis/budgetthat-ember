import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(sessionData, setRequestHeader) {
    setRequestHeader("X-USER-EMAIL", sessionData.email);
    setRequestHeader("X-USER-TOKEN", sessionData.token);
  }
});
