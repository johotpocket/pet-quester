const Choice = require('../../models/Choices');
const Scene = require('../../models/Scenes')

exports.all = (req, res) => {
  Choice.find((err, data) => {
    if (!data) return res.status(404).send("no worlds found");
    if (err) return res.status(500).send(err, "error finding all worlds");
    res.json(data);
  });
};


exports.createWithScene = (req, res) => {
  let newChoice = new Choice();
  newChoice.text = req.body.text;

  console.log(newChoice, "NEW CHOICE WAS SAVED");

newChoice.save((err, choice) => {
  Scene.findById(req.params.scene_id, (err, scene) => {
    if (err) {
      res.send(err);
    } else {
      scene.choices.push(choice._id);
      scene.save((err, scene) => {
        if(err) {
          res.send(err);
        } else {
          res.json(scene)
        }
      });
    }
  });
});
}

exports.getOne = (req, res) => {
  Choice.findById(req.params.choice_id, (err, data) => {
    if(err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}
