const World = require('./worlds');
const Choice = require('./choices')
const Monster = require('./monsters')

module.exports = (app) => {
  app.post('/api/worlds', World.create);
  app.get('/api/worlds', World.all);
  app.get('/api/worlds/:world_id', World.getOne);
  app.post('/api/choices', Choice.create);
  app.get('/api/choices', Choice.all);
  app.get('/api/choices/:choice_id', Choice.getOne);
  app.post('/api/monsters', Monster.create);
  app.get('./api/monsters', Monster.all);
  app.get('/api/monsters/:monster_id', Monster.getOne);
};
