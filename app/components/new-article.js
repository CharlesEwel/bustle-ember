import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow(){
      this.set('addNewArticle', true);
    },
    save1(){
      var params = {
        headline: this.get('headline'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('save2', params);
    }
  }
});
