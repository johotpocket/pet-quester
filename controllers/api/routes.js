const World = require('./worlds');
const Choice = require('./choices')

module.exports = (app) => {
  app.post('/api/worlds', World.create);
  app.get('/api/worlds', World.all);
  app.get('/api/worlds/:world_id', World.getOne);
  app.post('/api/choices', Choice.create);
  app.get('/api/choices', Choice.all);
  app.get('/api/choices/:choice_id', Choice.getOne);
};
