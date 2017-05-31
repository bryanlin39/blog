import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('entry')
  },

  actions:{
    saveEntry(params){

      var newEntry = this.store.createRecord('entry', params);
        console.log(params)    
      newEntry.save();
      this.transitionTo('index');
    }
  }
});
