import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    edit(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        article.destroyRecord();
        this.transitionTo('admin');
      }
    }
  }
});
