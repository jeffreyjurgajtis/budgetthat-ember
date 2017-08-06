import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal-overlay'],

  click(e) {
    e.preventDefault();

    this.get('clickHandler')();
  }
});
