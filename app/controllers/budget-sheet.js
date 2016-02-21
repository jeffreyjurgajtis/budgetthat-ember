import Ember from 'ember';

export default Ember.Controller.extend({
  categoriesEmpty: Ember.computed.empty('categories'),
  categoryTotals: Ember.computed.mapBy('categories', 'budgetAmount'),
  total: Ember.computed.sum('categoryTotals'),

  categoryEntryTotals: Ember.computed.mapBy('categories', 'total'),
  spent: Ember.computed.sum('categoryEntryTotals'),

  difference: Ember.computed('total', 'spent', {
    get() {
      return this.get('total') - this.get('spent');
    }
  }),

  entries: Ember.computed('categories.@each.entries', {
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

  entriesOrder: ['createdAt:desc'],
  sortedEntries: Ember.computed.sort('entries', 'entriesOrder'),

  actions: {
    addCategory(name, budgetAmount) {
      const flashMessages = Ember.get(this, 'flashMessages');

      let category = this.store.createRecord('category', {
        name: name,
        budgetAmount: budgetAmount,
        budgetSheet: this.budgetSheet
      });

      category.save().then(function() {
        flashMessages.success('Saved.');
      });
    },

    updateCategory(id, attribute, value) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let category = this.store.peekRecord('category', id);

      category.set(attribute, value);
      category.save().then(function() {
        flashMessages.success('Saved.');
      });
    },

    deleteCategory(id) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let category = this.store.peekRecord('category', id);

      if (confirm('Are you sure?')) {
        category.destroyRecord().then(function() {
          flashMessages.success('Saved.');
        });
      }
    },

    addEntry(occurredOn, description, categoryId, amount) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let category = this.store.peekRecord('category', categoryId);

      let entry = this.store.createRecord('entry', {
        occurredOn: occurredOn,
        description: description,
        category: category,
        amount: amount
      });

      entry.save().then(function() {
        flashMessages.success('Saved.');
      });
    },

    updateEntry(id, attribute, value) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let entry = this.store.peekRecord('entry', id);
      entry.set(attribute, value);

      entry.save().then(function() {
        flashMessages.success('Saved.');
      });
    },

    deleteEntry(id) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let entry = this.store.peekRecord('entry', id);

      entry.destroyRecord().then(function() {
        flashMessages.success('Saved.');
      });
    }
  }
});
