const Choice = require('../../models/Choices');

exports.all = (req, res) => {
  Choice.find((err, data) => {
    if (!data) return res.status(404).send("no worlds found");
    if (err) return res.status(500).send(err, "error finding all worlds");
    res.json(data);
  });
};


exports.create = (req, res) => {
  let newChoice = new Choice();
  newChoice.text = req.body.text;

  console.log(newChoice, "NEW CHOICE WAS SAVED");

  newChoice.save((err, data) => {
    if(err){
      res.send(err);
    } else {
      res.json({ data: data, message: "Choice successfully added!"})
    }
  })
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
