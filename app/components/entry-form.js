import Ember from 'ember';

export default Ember.Component.extend({
  submit(e) {
    e.preventDefault();
    const occurredOn  = this.occurredOn;
    const description = this.description;
    const categoryId  = e.target.getElementsByTagName('select')[0].value;
    const amount      = String(this.amount)
      .trim()
      .replace(/\$/g, '')
      .replace(/\./g, '');

    this.attrs.entryAdded(occurredOn, description, categoryId, parseInt(amount));

    this.set('occurredOn', '');
    this.set('description', '');
    this.set('amount', '');
    this.$('input.entry-occurred-on').focus();
  }
});
