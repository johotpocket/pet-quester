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
##### NavBar
Creating the NavBar is similar to our page routes
- Make a file in `src` folder named `NavBar.js`
- Need to require `link`, since we will be using links to access our pages
```js
 import { Link } from 'react-router';
```
- In the `NavBar.js` file, we will need to create links to each page we want access to
```js
<Link to="/home" activeClassName="active-nav-btn" className="nav-item"> Home </Link>
```
- Just make sure that whatever path you gave your file in `index.js` is the same in the link for the NavBar
- Import NavBar in `App.js`
```js
import NavBar from './NavBar';
```
- Call NavBar in our return method
```js
<NavBar />
```
- Since our Routes in `index.js` are cildren of Router, we need to access them in `App.js`, we can do this right under where we called NavBar
```js
{this.props.children}
```
- Now, we can test our routes by going to our page

### Login and Signup
In order to play our game, players will need to create an account and login. Later on, we will make it so players can also save progress through their account.

First we need a folder to store all of our User Authentication.
Inside `client` folder and then in `src` we will create our  `UserAuth` file.

Inside `UserAuth` we will need four files.
- A container for login
- Form for login
- A container for signup
- Form for signup

Each container will talk to its respective form.

##### Login and Singup Containers
Import:
```js
import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Loginform from './Loginform';
import PropTypes from 'prop-types';
```
Set state for email and password to null:
```js
state = {
  email: null,
  password: null
}
```

##### Login and Singup Forms
The forms will talk to the login and signup containers and be able to render certain elements. Because of this, forms are fairly simple. In our use case, we want to render links to our container.

```js
<input onChange={ (event) => props.onFieldChange("email", event.target.value)} type="email" className=""/>
```
We have two links, one for email and the other for password. Be sure to enclose your links in a `<form></form>` tag. In the form you will need to pass in `{props.handleSubmit}` since we defined it in our container files.

*After you create the containers and forms, you can test by going to your page and attempting to signup and log in*

##### Potential error
If you come across and error (like we did ) that says updateEmail (or updatePassword).props is not a function, make sure you check what your route is in `index.js`. When we got that error, we were rendering our *Form* pages when we needed to render our *Container* pages. For example:
`In index.js file`
```js
<Route path='/login' component={Logincontainer}/>
<Route path='/signup' component={Signupcontainer}/>
```

And of course, be sure to *import* each container file at the top of `index.js`

-------
### Database

Since we will both be coding on this project, we are going to create 'false' data, that is accessible to both of us. This way, we are not using two sets of data to test.

Install: `npm install --save dotenv`

##### Seeding your database

seedDevEnv is the file used for putting stuff in our database when our server launches. This is mainly to ensure that everyone working on the project is working with the same database content. The only problem is that it runs every time you run it, so eventually things will get flooded.... To stop this, we made .env in the root file. If it's set to true, it'll run on launch. If false, it won't. We used robomongo to clear our database if needed. Delete functionality will likely come later.
