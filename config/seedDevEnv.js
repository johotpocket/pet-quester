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
                            image: "http://img07.deviantart.net/2a70/i/2011/158/a/2/a_room_in_a_castle_by_ravenslane-d3iadga.jpg",
                            choices: [choicesStartingRoomLeave._id] })
  sceneStartingRoom.save()
  var sceneCastleHall = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "a stone hall lined with knight armor and portraits of frowning nobles",
                            image: "https://cdnb.artstation.com/p/assets/images/images/001/786/803/large/tina-popadic-zs-castle-hall.jpg?1452720318",
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
                            image: "http://weknownyourdreamz.com/images/forest/forest-04.jpg",
                            choices: [choicesReturnToCastle._id, choicesClimbLadder._id] })
  sceneForestStart.save()
  var sceneTreeWalkway = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "a walkway high above the forest floor. vicious bats block your path",
                            image: "http://redwoods.co.nz/wordpress/wp-content/uploads/2015/12/IMG_0188compressed.jpg",
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
