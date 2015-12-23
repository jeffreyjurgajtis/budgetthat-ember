import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell', 'input'],

  focusOut(e) {
    var id    = this.category.get('id');
    var value = String(e.target.value).trim();

    this.get('updateCategory')(id, 'name', value);
  }
});
