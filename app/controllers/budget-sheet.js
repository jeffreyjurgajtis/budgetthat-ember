import Ember from 'ember';

export default Ember.Controller.extend({
  categoryTotals: Ember.computed.mapBy('categories', 'budgetAmount'),
  total: Ember.computed.sum('categoryTotals'),

  categoryEntryTotals: Ember.computed.mapBy('categories', 'total'),
  spent: Ember.computed.sum('categoryEntryTotals'),

  difference: Ember.computed('total', 'spent', {
    get() {
      return this.get('total') - this.get('spent');
    }
  }),

  entries: Ember.computed('categories.[].entries', {
    get() {
      let result = [];

      this.get('categories').map(function(category) {
        category.get('entries').forEach(function(entry) {
          return result.push(entry);
        });
      });

      return result;
    }
  }),

  actions: {
    addCategory(name, budgetAmount) {
      var category = this.store.createRecord('category', {
        name: name,
        budgetAmount: budgetAmount,
        budgetSheet: this.budgetSheet
      });

      category.save();
    },

    updateCategory(category, attribute, value) {
      category.set(attribute, value);
      category.save();
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
    },

    updateEntry(id, attribute, value) {
      let entry = this.store.peekRecord('entry', id);
      entry.set(attribute, value);
      entry.save();
    },

    deleteEntry(id) {
      let entry = this.store.peekRecord('entry', id);
      entry.destroyRecord();
    }
  }
});
