import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['field-wrapper'],

  focusOut(e) {
    const id = this.get('entry').id;
    let value = String(e.target.value).trim();
    let occurredOn = new Date(value);
    this.attrs.entryChanged(id, 'occurredOn', occurredOn);
  },
  
  occurredOnFormatted: Ember.computed(function() {
    return this.get('entry').get('occurredOn').toISOString().substring(0, 10);
  })
});
