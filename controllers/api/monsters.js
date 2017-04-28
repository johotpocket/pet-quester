const Monster = require('../../models/Monsters');

exports.all = (req, res) => {
  Monster.find((err, data) => {
    if (!data) return res.status(404).send("no Monsters found");
    if (err) return res.status(500).send(err, "error finding all monsters");
    res.json(data);
  });
};


exports.create = (req, res) => {
  let newMonster = new Monster();
  newMonster.name = req.body.name;
  newMonster.species = req.body.species;
  newMonster.weakness = req.body.weakness;

  console.log(newMonster, "NEW MONSTER WAS SAVED")

  newMonster.save((err, data) => {
    if(err){
      res.send(err);
    } else {
      res.json({ data: data, message: "Monster successfully added!"})
    }
  })
}


exports.getOne = (req, res) => {
  Monster.findById(req.params.monster_id, (err, data) => {
    if(err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}
