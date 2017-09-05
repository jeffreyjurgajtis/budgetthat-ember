import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  classNames: ['modal'],

  errorMessages: [],
  errorMessagesPresent: Ember.computed.notEmpty('errorMessages'),

  actions: {
    close() {
      this.get('closeHandler')();
    },

    submit() {
      this.set('errorMessages', []);
      const file = $('input#entries')[0].files[0];
      const fileReader = new FileReader();

      fileReader.readAsText(file, 'UTF-8');
      fileReader.onprogress = this.fileReadingStarted;
      fileReader.onerror = this.fileReadingErrorHandler;

      fileReader.onload = (event) => {
        const fileString = event.target.result;
        const submitHandler = this.get('submitHandler');
        const promise = submitHandler(fileString);

        promise.catch(response => {
          this.set('errorMessages', response.errors);
        });
      };
    }
  },

  fileReadingStarted() {
    // display processing message in UI;
  },

  fileReadingErrorHandler(/* _event */) {
    // display error message in UI;
  }
});
