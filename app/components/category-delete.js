
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  click() {
    const categoryId = this.get('categoryId');
    this.attrs.categoryRemoved(categoryId);
  }
});
