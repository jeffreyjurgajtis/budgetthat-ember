import Ember from 'ember';

export default Ember.Component.extend({
  submit(e) {
    e.preventDefault();
    this.get('onSubmit')(this.name, this.budgetAmount);
    this.set('name', '');
    this.set('budgetAmount', '');
  }
});
