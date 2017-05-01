const World = require ('../models/Worlds');
const Scene = require ('../models/Scenes');
const Choice = require ('../models/Choices');

exports.seed = () => {
  var choicesStartingRoomLeave = new Choice ({ text: "leave room"})
  var choicesForestExplore = new Choice ({ text: "go outside"})
  var choicesCastleExplore = new Choice ({ text: "explore inside"})
  choicesStartingRoomLeave.save()
  choicesForestExplore.save()
  choicesCastleExplore.save()

  var sceneStartingRoom = new Scene ({ startingScene: true,
                            typeOfScene: "normal",
                            description: "a dimly lit room with stone walls",
                            choices: [choicesStartingRoomLeave._id] })
  sceneStartingRoom.save()
  var sceneCastleHall = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "a stone hall lined with knight armor and portraits of frowning nobles",
                            choices: [choicesForestExplore._id, choicesCastleExplore._id] })
  sceneCastleHall.save()

  var world1 = new World ({ title: "Castle",
                            scenes: [sceneStartingRoom._id, sceneCastleHall._id]
                          })


  var choicesReturnToCastle = new Choice ({ text: "return to castle" })
  var choicesClimbLadder = new Choice ({ text: "climb ladder"})
  var choicesFightBats = new Choice ({ text: "fight those bats"})
  var choicesFleeFromBats = new Choice ({ text: "turn tail and run from those bats"})
  choicesReturnToCastle.save()
  choicesClimbLadder.save()
  choicesFightBats.save()
  choicesFleeFromBats.save()

  var sceneForestStart = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "the edge of a typical fairytale forest",
                            choices: [choicesReturnToCastle._id, choicesClimbLadder._id] })
  sceneForestStart.save()
  var sceneTreeWalkway = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "a walkway high above the forest floor. vicious bats block your path",
                            choices: [choicesFightBats._id, choicesFleeFromBats._id] })
  sceneTreeWalkway.save()

  var world2 = new World ({ title: "Forest",
                            scenes: [sceneForestStart._id, sceneTreeWalkway._id] })


world1.save((err, data) =>{
  if(err) {
    console.log(err)
  }else{
    console.log("populated the castle")
  }
 })
world2.save((err, data) =>{
  if(err) {
    console.log(err)
   }else{
    console.log("populated the forest")
  }
 })
}
