const World = require('../../models/Worlds');
const Scene = require('../../models/Scenes');

exports.all = (req, res) => {
  Scene.find()
    .populate('choices')
    .exec((err, data) => {
      if (!data) return res.status(404).send("no scenes found");
      if (err) return res.status(500).send(err, "error finding all scenes");
      res.json(data);
    });
  };

//first create a scene
//in your save scene callback, look up world by id
//push newly made scene's id into world.scenes array
//then save callback again
exports.createWithWorld = (req, res) =>{
  let newScene = new Scene();
  newScene.startingScene = req.body.startingScene;
  newScene.typeOfScene = req.body.typeOfScene;
  newScene.description = req.body.description;

  console.log(newScene, "AN ENTIRE SCENE SAVED");

  newScene.save((err, scene) => {
   World.findById(req.params.world_id, (err, world) => {
     if (err) {
       res.send(err);
     } else {
       world.scenes.push(scene._id);
       world.save((err, world) => {
         if (err) {
           res.send(err);
         } else {
           res.json(world);
         }
       });
     }
   });
 });
}


exports.getOne = (req, res) => {
  Scene.findById(req.params.scene_id)
    .populate('choices')
    .exec((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}
