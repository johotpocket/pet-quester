const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db-environment-setup');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
connectDB()

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Express only serves static assets in production
const isProd = process.env.NODE_ENV === 'production';
const clientPath = isProd ? 'client/build' : 'client/public';

if (isProd) {
  app.use(express.static(clientPath));
}

app.use(session({
 secret: 'blahblahblah'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
// routes ======================================================================
require('./config/passport')(passport); // pass passport for configuration
require('./controllers/api/userAuth.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`server is LIT at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
