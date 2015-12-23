import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCategory(name, budgetAmount) {
      var category = this.store.createRecord('category', {
        name: name,
        budgetAmount: budgetAmount,
        budgetSheet: this.model
      });

      category.save();
    },

    updateCategory(category, attribute, value) {
      category.set(attribute, value);
      category.save();

      this.model.notifyPropertyChange('categories.@each.budgetAmount'); // WHY!?
    }
  }
});
