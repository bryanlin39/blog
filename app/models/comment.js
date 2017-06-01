import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  body: DS.attr(),
  entry: DS.belongsTo('entry', { async: true })
});
