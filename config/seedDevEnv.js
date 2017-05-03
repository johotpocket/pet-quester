const World = require ('../models/Worlds');
const Scene = require ('../models/Scenes');
const Choice = require ('../models/Choices');

exports.seed = () => {
  var choicesReturnToCastle = new Choice ({ text: "return to castle"})
  choicesReturnToCastle.save()
  var choicesClimbLadder = new Choice ({ text: "climb ladder"})
  choicesClimbLadder.save()
  choicesWalkDownPath = new Choice ({ text: "walk down the forest path" })
  choicesWalkDownPath.save()
  var choicesFightBats = new Choice ({ text: "fight those bats"})
  choicesFightBats.save()
  var choicesFleeFromBats = new Choice ({ text: "turn tail and run from those bats"})
  choicesFleeFromBats.save()
  var choicesLiveHere = new Choice ({ text: "live out your days in the abandoned elf village"})
  choicesLiveHere.save()
  var choicesMoveOn = new Choice ({ text: "the village is nice, but let's keep going"})
  choicesMoveOn.save()
  var choicesJump = new Choice ({ text: "jump into the raging waters. you probably won't survive, but you're brave, right?"})
  choicesJump.save()
  var choicesDontJump = new Choice ({ text: "don't jump. coward."})
  choicesDontJump.save()
  var choicesQuit = new Choice ({ text: "quit game"})
  choicesQuit.save()
  var choicesFightGoblins = new Choice ({ text: "fight those goblins" })
  choicesFightGoblins.save()
  var ChoicesGlareAtGoblins = new Choice ({ text: "glare menacingly at those goblins"})
  ChoicesGlareAtGoblins.save()
  var choicesRestart = new Choice ({ text: "restart game"})
  choicesRestart.save()
  var choicesEnterCottage = new Choice ({ text: "enter the cottage. There's no way anyone lives here anymore."})
  choicesEnterCottage.save()
  var choicesMovePastCottage = new Choice ({ text: "the cottage holds no interest to you. move on"})
  choicesMovePastCottage.save()
  var choicesPushOldMan1 = new Choice ({ text: "push the old man down"})
  choicesPushOldMan1.save()
  var choicesPushOldMan2 = new Choice ({ text: "push the old man down"})
  choicesPushOldMan2.save()
  var choicesPushOldMan3 = new Choice ({ text: "push the old man down"})
  choicesPushOldMan3.save()
  var choicesPushOldMan4 = new Choice ({ text: "push the old man down"})
  choicesPushOldMan4.save()
  var choicesShoutAtOldMan = new Choice ({ text: "make a loud noise, attempt to spook the old man"})
  choicesShoutAtOldMan.save()
  var choicesLootCottage = new Choice ({ text: "search the place for supplies and trinkets"})
  choicesLootCottage.save()
  var choicesLeaveCottage = new Choice ({ text: "leave the cottage"})
  choicesLeaveCottage.save()


  var sceneForestStart = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "the edge of a typical fairytale forest",
                            image: "http://weknownyourdreamz.com/images/forest/forest-04.jpg",
                            choices: [choicesReturnToCastle._id, choicesWalkDownPath._id, choicesClimbLadder._id] })
  choicesFleeFromBats.nextScene = sceneForestStart._id
  choicesQuit.nextScene = sceneForestStart._id
  choicesRestart.nextScene = sceneForestStart._id
  sceneForestStart.save()

  var sceneTreeWalkway = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "a walkway high above the forest floor. vicious bats block your path",
                            image: "http://redwoods.co.nz/wordpress/wp-content/uploads/2015/12/IMG_0188compressed.jpg",
                            choices: [choicesFightBats._id, choicesFleeFromBats._id] })
  choicesClimbLadder.nextScene = sceneTreeWalkway._id
  sceneTreeWalkway.save()

  var sceneAbandonedElfVillage = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "an abandoned village where the elves lived. Why they left, none can say.",
                            image: "http://store.vandersteltstudio.com/images/Rivendell%20Paper%20Giclee%2016%20x%2024.jpg",
                            choices: [choicesLiveHere._id, choicesMoveOn._id] })
  choicesFightBats.nextScene = sceneAbandonedElfVillage._id
  sceneAbandonedElfVillage.save()

  var sceneLiveInElfVillage = new Scene ({ startingScene: false,
                            typeOfScene: "end",
                            description: "you decide to stay in the elf village for... a while. it's nice here",
                            image: "",
                            choices: [choicesQuit._id, choicesRestart._id] })
  choicesLiveHere.nextScene = sceneLiveInElfVillage._id
  sceneLiveInElfVillage.save()

  var sceneForestEdge = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "the trees come to an end, and beyond you stretches an endless ocean, the end of a canvas",
                            image: "https://hannahsaustralianadventures.files.wordpress.com/2011/11/bondi-to-coogee-081.jpg",
                            choices: [choicesJump._id, choicesDontJump._id] })
  choicesMoveOn.nextScene = sceneForestEdge._id
  sceneForestEdge.save()

  var sceneOceanEnd = new Scene ({ startingScene: false,
                            typeOfScene: "end",
                            description: "you survive the fall, but the waves overcome you and you are lost to the depths",
                            image: "https://carynmirriamgoldberg.files.wordpress.com/2011/12/100_19471.jpg",
                            choices: [choicesRestart._id, choicesQuit._id] })
  choicesJump.nextScene = sceneOceanEnd._id
  sceneOceanEnd.save()

  var sceneOldPathIntoForest = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "An old path into the forest. Further on, you see a shifty looking band of goblins",
                            image: "https://s-media-cache-ak0.pinimg.com/originals/f6/35/dd/f635ddb1868d575823a06f7aa99e94b1.jpg",
                            choices: [choicesFightGoblins._id, ChoicesGlareAtGoblins._id] })
  choicesWalkDownPath.nextScene = sceneOldPathIntoForest._id
  sceneOldPathIntoForest.save()

  var sceneGoblinEnd = new Scene ({ startingScene: false,
                            typeOfScene: "end",
                            description: "the goblins are not impressed with your scowling, and proceed to beat and rob you",
                            image: "",
                            choices: [choicesRestart._id, choicesQuit._id] })
  ChoicesGlareAtGoblins.nextScene = sceneGoblinEnd._id
  sceneGoblinEnd.save()

  var sceneOldCottage = new Scene ({ startingScene: false,
                            typeOfScene: "normal",
                            description: "a tiny cottage. it looks very, very old",
                            image: "",
                            choices: [choicesEnterCottage._id, choicesMovePastCottage._id] })
  choicesFightGoblins.nextScene = sceneOldCottage._id
  sceneOldCottage.save()

  var sceneInsideCottage = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "an old man with a creepy grin waits inside. with a cackle, he moves towards you.... menacingly",
                            image: "http://static.fjcdn.com/pictures/When_96eeff_1756509.jpg",
                            choices: [choicesPushOldMan1._id, choicesShoutAtOldMan._id] })
  choicesEnterCottage.nextScene = sceneInsideCottage._id
  sceneInsideCottage.save()

  var OldManPush1 = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "the old man cackles and gets back up",
                            image: "http://static.fjcdn.com/pictures/When_96eeff_1756509.jpg",
                            choices: [choicesPushOldMan2._id, choicesShoutAtOldMan._id] })
  choicesPushOldMan1.nextScene = OldManPush1._id
  OldManPush1.save()

  var OldManPush2 = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "the old man cackles and stands back up",
                            image: "http://static.fjcdn.com/pictures/When_96eeff_1756509.jpg",
                            choices: [choicesPushOldMan3._id, choicesShoutAtOldMan._id] })
  choicesPushOldMan1.nextScene = OldManPush2._id
  OldManPush2.save()

  var OldManPush3 = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "the old man cackles and gets back up. you start to feel a little bad",
                            image: "http://static.fjcdn.com/pictures/When_96eeff_1756509.jpg",
                            choices: [choicesPushOldMan4._id, choicesShoutAtOldMan._id] })
  choicesPushOldMan3.nextScene = OldManPush3._id
  choicesPushOldMan4.nextScene = OldManPush1._id
  OldManPush3.save()

  var OldManShout = new Scene ({ startingScene: false,
                            typeOfScene: "fight",
                            description: "the old man yelps and then disappears in a comical poof of smoke",
                            image: "http://media.istockphoto.com/vectors/vintage-comic-book-lettering-poof-vector-id165954273",
                            choices: [choicesLootCottage._id, choicesLeaveCottage._id] })
                            //when you leave, it takes you to where "move on" would have.
  choicesShoutAtOldMan.nextScene = OldManShout._id
  OldManShout.save()

  var sceneCottageEnd = new Scene ({ startingScene: false,
                            typeOfScene: "end",
                            description: "you begin to feel woozy. just before blacking out, you hear cackling.",
                            image: "",
                            choices: [choicesQuit._id, choicesRestart._id] })
  choicesLootCottage.nextScene = sceneCottageEnd._id
  choicesLeaveCottage.nextScene = sceneCottageEnd._id
  sceneCottageEnd.save()

  var forest = new World ({ title: "Forest",
                            scenes: [sceneForestStart._id,
                                     sceneTreeWalkway._id,
                                     sceneAbandonedElfVillage._id,
                                     sceneLiveInElfVillage._id,
                                     sceneForestEdge._id,
                                     sceneOceanEnd._id,
                                     sceneOldPathIntoForest._id,
                                     sceneGoblinEnd._id,
                                     sceneOldCottage._id,
                                     sceneInsideCottage._id,
                                     OldManPush1._id,
                                     OldManPush2._id,
                                     OldManPush3._id,
                                     OldManShout._id,
                                     sceneCottageEnd._id] })


  var choicesDoorNumOne = new Choice ({ text: 'door number one' })
  choicesDoorNumOne.save()

  var choicesDoorNumTwo = new Choice ({ text: 'door number two' })
  choicesDoorNumTwo.save()

  var choicesEatSweets = new Choice ({ text: 'eat all the sweet food!' })
  choicesEatSweets.save()
  var choicesEatSavory = new Choice ({ text: 'eat all the savory food!' })
  choicesEatSavory.save()
  var choicesGoUpstairs = new Choice ({ text: 'follow the stairs up' })
  choicesGoUpstairs.save()
  var choicesGoDownStairs = new Choice ({ text: 'follow the stairs down' })
  choicesGoDownStairs.save()
  var choicesFightTheBoar = new Choice ({ text: 'fight!!!' })
  choicesFightTheBoar.save()
  var choicesRunAwayFromBoar = new Choice ({ text: 'run away!!!'})
  choicesRunAwayFromBoar.save()
  var choicesQuit = new Choice ({ text: 'quit game' })
  choicesQuit.save()
  var choicesRestart = new Choice ({ text: 'restart game' })
  choicesRestart.save()

  var sceneCastleLeaveStartRoom = new Scene ({ startingScene: false,
       typeOfScene: 'normal',
       description: 'you see two doors, do you pick door #1 or door #2?',
       image: 'https://thumbs.dreamstime.com/t/two-ancient-doors-6320662.jpg',
       choices: [choicesDoorNumOne._id, choicesDoorNumTwo._id] })
  sceneCastleLeaveStartRoom.save()

  var sceneFindAnotherDoor = new Scene ({ startingScene: false,
      typeOfScene: 'normal',
      description: 'You open the door and find yourself in a creepy hallway.<br/> On the otherside is another door. You go to it and open it, <br/>there are stairs leading up and stairs leading down',
      image: 'http://www.urban75.org/photos/kent/images/dover-castle-20.jpg',
      choices: [choicesGoUpstairs._id, choicesGoDownStairs._id] })
  sceneFindAnotherDoor.save()
  choicesDoorNumOne.nextScene = sceneFindAnotherDoor._id

  var sceneFindKitchen = new Scene ({ startingScene: false,
      typeOfScene: 'normal',
      description: 'You found the kitchen! It is full of delicious food!',
      image:'https://static1.squarespace.com/static/52d59eb5e4b02a4ced9681d4/52f54721e4b09d0c24fea443/52fa6162e4b05af3685677b8/1392140720882/13th+Scene+123+Shot+2.jpg',
      choices: [choicesEatSweets._id, choicesEatSavory._id] })
  sceneFindKitchen.save()
  choicesDoorNumTwo.nextScene = sceneFindKitchen._id

  var sceneTrapDoorOpens = new Scene ({ startingScene: false,
      typeOfScene:'battle',
      description: 'a trap door opened and you have fallen through! You find youself in a cellar, where a wild boar starts charing!',
      image: 'http://3.bp.blogspot.com/-2MLUmOQbQks/UazOFHOpvdI/AAAAAAAALc8/w8cQ0ukdXek/s1600/(20130520)+-+Cardoness+Castle+-+007.JPG',
      choices: [choicesFightTheBoar._id, choicesRunAwayFromBoar._id] })
  sceneTrapDoorOpens.save()

  var sceneFoughtTheBoar = new Scene ({ startingScene: false,
      typeOfScene: 'ending',
      description: 'You fought valiantly, but alas, you died.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIb-XOM1fvsw0HlCATLAT6gQD6af35mvyuuB_a1G6eh8aWW-Bdnw',
      choices: [choicesQuit._id, choicesRestart._id] })
    sceneFoughtTheBoar.save()

  var sceneRunAwayFromBoar = new Scene ({ startingScene: false,
      typeOfScene: 'winning',
      description: 'You have won the game!!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxt21iTJAgdVVciLLejQfCi9sL7UVj0qgA2Zgn1tkbEpuwY56QA',
      choices: [choicesRestart._id, choicesQuit._id] })
    sceneRunAwayFromBoar.save()


    choicesEatSweets.nextScene = sceneTrapDoorOpens._id
    // choicesEatSavory.nextScene =
    choicesFightTheBoar.nextScene = sceneFoughtTheBoar._id
    choicesRunAwayFromBoar.nextScene = sceneRunAwayFromBoar._id

    var castle = new World ({ title: "Castle",
                               scenes: [sceneCastleLeaveStartRoom._id, sceneFindKitchen._id, sceneFindAnotherDoor._id,
                                        sceneTrapDoorOpens._id, sceneFoughtTheBoar._id, sceneRunAwayFromBoar._id] })


castle.save((err, data) =>{
   if(err) {
     console.log(err)
   }else{
     console.log("populated the castle")
   }
})

forest.save((err, data) =>{
  if(err) {
    console.log(err)
   }else{
    console.log("populated the forest")
  }
 })
}
