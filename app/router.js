import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news');
  this.route('entertainment');
  this.route('fashion');
  this.route('fashion-beauty');
  this.route('lifestyle');
  this.route('books');
  this.route('article', {path: '/article/:article_id'});
  this.route('admin');
  this.route('editable-article', {path: '/editable-article/:article_id'});
});

export default Router;
