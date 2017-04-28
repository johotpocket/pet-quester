const World = require('./worlds');
const Choice = require('./choices');
const Monster = require('./monsters');
const Scene = require('./scenes');

module.exports = (app) => {
  app.post('/api/worlds', World.create);
  app.get('/api/worlds', World.all);
  app.get('/api/worlds/:world_id', World.getOne);
  app.delete('/api/worlds/:world_id', World.destroy);

  app.post('/api/choices/:scene_id', Choice.createWithScene);
  app.get('/api/choices', Choice.all);
  app.get('/api/choices/:choice_id', Choice.getOne);

  app.post('/api/monsters', Monster.create);
  app.get('/api/monsters', Monster.all);
  app.get('/api/monsters/:monster_id', Monster.getOne);

  app.post('/api/scenes/:world_id', Scene.createWithWorld);
  app.get('/api/scenes', Scene.all);
  app.get('/api/scene/:scene_id', Scene.getOne);
};
