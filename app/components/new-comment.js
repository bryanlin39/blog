import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment: function(){
      var date = new Date();
      var params = {
        date: date.toDateString(),
        body: this.get('body'),
        entry: this.get('entry')
      };
      this.sendAction('saveComment', params);
    }
  }
});
