# PET-QUESTER

You pet pets or something, I dunno. It's an adventure, we'll figure it out!

----
## To start project
- Forked initial repository from project partner(johotpocket)
- Cloned repo from my github:
`git clone https://github.com/tdicomitis/pet-quester.git`
- Opened in atom

## Clean up
- Cleaned up and deleted files we would not need (logo.svg)
- Removed any imports of files we did not need

## Project preparation
Made wireframe of what our pages would look like:
- Splash page
- Login/Signup pages, choose avatar for game
- Story/Instructions page
- General layout of game play page

----

# Basics
Now that we both have access to the repo, we will begin to create our game and divide tasks. Will co-partner on coding and split if we need to (one works on front-end the other works on back-end).

### Client Side and Backend Servers
For simplicity sake, we will have both of our servers start together

First, we will need to install express. `npm install --save express`

At the top of `index.js` we will need to require express and our path:


Then, we will need to configure our `server.js` file
In `server.js` we need to *set*, *get*, and *listen* for our path.
```js
const express = require('express');
const app = express();
const path = require('path');
```

```js
app.set('port', (process.env.PORT || 3001));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`server is LIT at: http://localhost:${app.get('port')}/`);
});
```
Also, be sure to export at the bottom so other pages can read the `server.js` page:
```js
module.exports = app;
```

### Creating Routes
Based on our wireframe, we will now create routes for all of our pages (Home, Login/Signup and Story page) and create a simple navbar to access each page until we get everything set up.

##### Steps
- All of our files will go into our `src` folder
- Create a file for each page we want to create a route for
  - `HomePage.js`
  - `Story.js`
  - `Loginsignup.js`
- After the files are created, we need to import and set up routes in `index.js`
- Import each page at the top of `index.js`
  - `import Home from './HomePage';`
  -`import Story from './Story';`
  -`import Loginsignup from './Loginsignup';`
- Next, create the actual routes
```js
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/story' component={Story}/>
      <Route path ='/loginsignup' component={Loginsignup}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
```
##### navbar
Creating the navbar is similar to our page routes
- Make a file in `src` folder named `navbar.js`
- Need to require `link`, since we will be using links to acces our pages
```js
 import { Link } from 'react-router';
```
- In the `navbar.js` file, we will need to create links to each page we want access to
```js
<Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
```
- Just make sure that whatever path you gave your file in `index.js` is the same in the link for the navbar
