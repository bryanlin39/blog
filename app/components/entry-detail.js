import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteEntry(entry){
      if (confirm('Are you sure you want to delete this entry?')) {
        this.sendAction('destroyEntry', entry);
      }
    }
  }
});
