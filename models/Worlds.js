var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var WorldsSchema = new mongoose.Schema({
  title: String,
  scenes: [
    {
      firstScene: true,
      type: "choose-path",
      description: "Forst Blah Blah Blah Bhal!",
      choices: {
        choice: {text: String, jumpToScene: Number },
        choice: {text: String, jumpToScene: Number },
      }
    }
      { number: 1,
        type: "battle-scene",
        description: "You have encountered a SOMETHING!!",
        choices: {
          choice: { text: String, correct: false, nextScene: Number },
          choice: { text: String, correct: false, nextScene: Number },
          choice: { text: String, correct: true, nextScene: Number },
        }
      }
      { number: 2,
        type: "end-scene",
        description: "You have died",
        choices: {
          choice: { text: String, jumpToScene: Number },
          choice: { text: String, jumpToScene: Number },
        }
      }
      { number: 3,
        type: "end-scene",
        description: "You have survived!!",
        choices: {
          choice: { text: String, jumpToScene: Number },
          choice: { text: String, jumpToScene: Number },
        }
      }
      { number: 4,
        type: "end-scene",
        description: "You have lost!!",
        choices: {
          choice: { text: String, jumpToScene: Number },
          choice: { text: String, jumpToScene: Number },
        }
      }
    ]
  ]
});

module.exports = mongoose.model('World', WorldsSchema);
