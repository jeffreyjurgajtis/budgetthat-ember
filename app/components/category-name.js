import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell', 'input'],

  focusOut(e) {
    var value = String(e.target.value).trim();

    this.get('updateCategory')(this.category, 'name', value);
  }
});
