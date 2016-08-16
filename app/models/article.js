import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  category : DS.attr()
});
