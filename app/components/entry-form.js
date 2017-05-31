import Ember from 'ember';

export default Ember.Component.extend({
  newForm: false,
  actions: {
    formShow: function(){
      this.set('newForm', true);
    },
    saveEntry: function(){
      var date = new Date;
      var params = {
        date: date.toDateString(),
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category'),
        tag: this.get('tag')
      }
      this.set('newForm', false);
      this.sendAction('saveEntry', params)
    }
  }
});
