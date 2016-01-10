import Ember from 'ember';

export default Ember.Component.extend({
  submit(e) {
    e.preventDefault();
    var occurredOn  = this.occurredOn;
    var description = this.description;
    var categoryId  = e.target.getElementsByTagName('select')[0].value;
    var amount      = String(this.amount)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.get('addEntry')(occurredOn, description, categoryId, parseInt(amount));
    this.set('occurredOn', '');
    this.set('description', '');
    this.set('amount', '');
    this.$('input.entry-occurred-on').focus();
  }
});
