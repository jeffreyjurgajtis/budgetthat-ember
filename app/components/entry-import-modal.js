import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  classNames: ['modal'],

  actions: {
    close() {
      this.get('closeHandler')();
    },

    submit() {
      const file = $('input#entries')[0].files[0];
      const fileReader = new FileReader();

      fileReader.readAsText(file, 'UTF-8');
      fileReader.onprogress = this.fileReadingStarted;
      fileReader.onerror = this.fileReadingErrorHandler;

      fileReader.onload = (event) => {
        const fileString = event.target.result;
        const submitHandler = this.get('submitHandler');
        submitHandler(fileString);
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
