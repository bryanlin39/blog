import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    formShow: function(){
      this.set('updateForm', true);
    },
    updateEntry: function(entry){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category'),
        tag: this.get('tag')
      };
      this.set('updateForm', false);
      this.sendAction('updateEntry', entry, params);
    }
  }
});
