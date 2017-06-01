import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      entry: this.store.findRecord('entry', params.entry_id),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    destroyEntry(entry) {
      var comment_deletions = entry.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function(){
        return entry.destroyRecord();
      })
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
    },

    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var entry = params.entry;
      entry.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return entry.save()
      });
    },
    updateComment(comment, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('entry');
    },
    deleteComment(comment){
      comment.destroyRecord();
    }
  }
});
