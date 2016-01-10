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

      this.model.notifyPropertyChange('categories');
    },

    addEntry(occurredOn, description, categoryId, amount) {
      var category = this.store.peekRecord('category', categoryId);

      var entry = this.store.createRecord('entry', {
        occurredOn: occurredOn,
        description: description,
        category: category,
        amount: amount
      });

      entry.save();

      this.model.notifyPropertyChange('categories');
    }
  }
});
