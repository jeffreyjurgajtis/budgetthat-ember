import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/'});
  this.route('signup');
  this.route('budgetSheets');
  this.route('budgetSheet', { path: '/budgetSheets/:budgetSheetId' });
});

export default Router;
