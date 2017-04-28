const Scene = require('../../models/Scenes')

exports.all = (req, res) => {
  Scene.find((err, data) => {
    if (!data) return res.status(404).send("no scenes found");
    if (err) return res.status(500).send(err, "error finding all scenes");
    res.json(data);
  });
};


exports.create = (req, res) =>{
  let newScene = new Scene();
  newScene.startingScene = req.body.startingScene;
  newScene.typeOfScene = req.body.typeOfScene;
  newScene.description = req.body.description;

  console.log(newScene, "AN ENTIRE SCENE SAVED");

  newScene.save((err, data) =>{
    if(err){
      res.send(err);
    } else {
      res.json({data: data, message: "scene successfully struck!"});
    }
  })
}


exports.getOne = (req, res) => {
  Scenes.findById(req.params.scene_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}
