import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

export default BaseAuthenticator.extend({
  tokenEndpoint: 'http://localhost:3000/sessions',

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.access_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(credentials) {
    var _this = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {

      Ember.$.ajax({
        url:         _this.tokenEndpoint,
        type:        'POST',
        data:        JSON.stringify({ session: credentials }),
        contentType: 'application/json'
      }).then(function(response) {
        var user = response.data.attributes;

        Ember.run(function() {
          resolve({
            access_token: user.access_token,
            email: user.email
          });
        });

      }, function(xhr) {
        var response = xhr.responseJSON;

        Ember.run(function() {
          reject(response.error);
        });
      });

    });

  },

  invalidate: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      resolve();
    });
  }
});
