const World = require('./worlds');

module.exports = (app) => {
  app.post('/api/worlds', World.create);
  app.get('/api/worlds', World.all);
  app.get('/api/worlds/:world_id', World.getOne);
};
