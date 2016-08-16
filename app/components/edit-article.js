import Ember from 'ember';

export default Ember.Component.extend({
  editArticleForm: false,
  actions: {
    editArticleForm() {
      this.set('editArticleForm', true);
    },
    edit(article) {
      var params = {
        headline: this.get('headline'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('editArticleForm', false);
      this.sendAction('edit', article, params);
    }
  }
});
