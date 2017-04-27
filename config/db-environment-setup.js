const uriUtil  = require('mongodb-uri');
const mongoose = require('mongoose');

const options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
module.exports = () => {
  if(process.env.NODE_ENV === 'production') {
    const mongodbUri = process.env.MONGODB_URI
    const mongooseUri = uriUtil.formatMongoose(mongodbUri);
    mongoose.connect(mongooseUri, options);
  } else if (process.env.NODE_ENV === 'development') {
    const mongodbUri = "mongodb://localhost/gaming-site-db"
    const mongooseUri = uriUtil.formatMongoose(mongodbUri);
    mongoose.connect(mongooseUri, options);

    if(process.env.SEED_DB === 'true'){
      require('./seedDevEnv').seed();
    }

  } else if (process.env.NODE_ENV === 'test') {
    const mongodbUri = "mongodb://localhost/test-gaming-site-db"
    const mongooseUri = uriUtil.formatMongoose(mongodbUri);
    mongoose.connect(mongooseUri, options);
  } else {
    const mongodbUri = "mongodb://localhost/gaming-site-db"
    const mongooseUri = uriUtil.formatMongoose(mongodbUri);
    mongoose.connect(mongooseUri, options);

    if(process.env.SEED_DB === 'true'){
      require('./seedDevEnv').seed();
    }

  }
}
