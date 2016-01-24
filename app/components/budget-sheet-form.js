import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['budget-sheet-card', 'budget-sheet-card--inverted'],

  submit(e) {
    e.preventDefault();
    this.get('addBudgetSheet')(this.name);
    this.set('name', '');
  }
});
