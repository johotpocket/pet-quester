const World = require ('../models/Worlds');

exports.seed = () => {
  var world1 = new World ({ title: "Castle" })
  var world2 = new World ({ title: "Forest" })

world1.save((err, data) =>{
  if(err) {
    console.log(err)
  }else{
    console.log("populated the database")
  }
 })
world2.save((err, data) =>{
  if(err) {
    console.log(err)
   }else{
    console.log("populated the database")
  }
 })
}
