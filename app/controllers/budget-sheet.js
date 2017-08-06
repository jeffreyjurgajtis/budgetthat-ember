import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingImportModal: false,

  categoriesEmpty: Ember.computed.empty('categories'),
  categoryTotals: Ember.computed.mapBy('categories', 'budgetAmount'),
  total: Ember.computed.sum('categoryTotals'),

  categoryEntryTotals: Ember.computed.mapBy('categories', 'total'),
  categorizedSpent: Ember.computed.sum('categoryEntryTotals'),

  uncategorizedEntryAmounts: Ember.computed(
    'entries.@each.{amount,category}',
    function() {
      return this.get('entries').reduce(function(acc, entry) {
        if (Ember.isBlank(entry.get('category.id'))) {
          acc.push(entry.get('amount'));
        }

        return acc;
      }, []);
    }
  ),
  uncategorizedSpent: Ember.computed.sum('uncategorizedEntryAmounts'),

  spent: Ember.computed('categorizedSpent', 'uncategorizedSpent', function() {
    const categorizedSpent = this.get('categorizedSpent');
    const uncategorizedSpent = this.get('uncategorizedSpent');

    return categorizedSpent + uncategorizedSpent;
  }),

  difference: Ember.computed('total', 'spent', function() {
    return this.get('total') - this.get('spent');
  }),

  projectedSavings: Ember.computed('budgetSheet.income', 'total', function() {
    return this.get('budgetSheet.income') - this.get('total');
  }),

  actualSavings: Ember.computed('budgetSheet.income', 'spent', function() {
    return this.get('budgetSheet.income') - this.get('spent');
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
      const category = this.store.peekRecord('category', categoryId);
      const budgetSheet = this.get('budgetSheet');

      const entry = this.store.createRecord('entry', {
        occurredOn,
        description,
        category,
        amount,
        budgetSheet
      });

      entry.save().then(function() {
        flashMessages.success('Saved.');
      });
    },

    updateEntry(id, attribute, value) {
      const flashMessages = Ember.get(this, 'flashMessages');
      const entry = this.store.peekRecord('entry', id);
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
    },

    updateBudgetSheet(id, attribute, value) {
      const flashMessages = Ember.get(this, 'flashMessages');
      const budgetSheet = this.store.peekRecord('budgetSheet', id);
      budgetSheet.set(attribute, value);

      budgetSheet.save().then(function() {
        flashMessages.success('Saved.');
      });
    },

    toggleDisplaySavings(id) {
      const budgetSheet = this.store.peekRecord('budgetSheet', id);

      budgetSheet.toggleProperty('displaySavings');
      budgetSheet.save();
    },

    openImportModal() {
      this.set('isShowingImportModal', true);
    },

    closeImportModal() {
      this.set('isShowingImportModal', false);
    },

    createEntryImport(fileData) {
      const flashMessages = Ember.get(this, 'flashMessages');
      const budgetSheet = Ember.get(this, 'budgetSheet');
      const entryImport = this.store.createRecord('entry-import', {
        budgetSheet,
        fileData
      });

      entryImport.save().then(() => {
        this.set('isShowingImportModal', false);
        flashMessages.success('Saved.');
      });
    }
  }
});
