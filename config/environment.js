/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'spendify',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    flashMessageDefaults: {
      // flash message defaults
      timeout: 1000,
      extendedTimeout: 0,
      priority: 200,
      sticky: false,
      showProgress: false,

      // service defaults
      type: 'flash-message',
      types: ['success', 'failure'],
      injectionFactories: ['controller', 'component'],
      preventDuplicates: false
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:3000",
      'font-src': "'self' https://fonts.gstatic.com",
      'style-src': "'self' https://fonts.googleapis.com"
    },

    ENV['ember-simple-auth'] = {
      routeAfterAuthentication: 'budgetSheets',
      routeIfAlreadyAuthenticated: 'budgetSheets',
      crossOriginWhitelist: ['http://localhost:3000']
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-simple-auth'] = {
      routeAfterAuthentication: 'budgetSheets',
      routeIfAlreadyAuthenticated: 'budgetSheets',
      crossOriginWhitelist: ['http://budjetapp-api.herokuapp.com']
    },

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://budjetapp-api.herokuapp.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'style-src': "'self' https://fonts.googleapis.com"
    }
  }

  return ENV;
};
