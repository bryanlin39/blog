import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('entry', params.entry_id);
  },

  actions: {
    destroyEntry(entry) {
      entry.destroyRecord();
      this.transitionTo('index');
    },
    updateEntry(entry, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          entry.set(key,params[key]);
        }
      });
      entry.save();
      this.transitionTo('entry');
    }
  }
});
