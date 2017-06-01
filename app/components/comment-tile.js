import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShow: false,
  actions:{
    showCommentForm: function(){
      this.set('updateFormShow', true);
    },
    updateComment: function(comment){
      var params = {
        body: this.get('commentBody')
      };
      this.set('updateFormShow', false);
      this.sendAction('updateComment', comment, params);
    },
    deleteComment: function(comment){
      this.sendAction('deleteComment', comment);
    }
  }
});
