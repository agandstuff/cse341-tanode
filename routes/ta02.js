//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

// variables to be rendered
const users = [{name:'Helen'}, {name: 'Don'}, {name: 'Linda'}];
let userExists = false;
let noUser = false;

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA02: true, // For HBS
    contentCSS: true, // For HBS
    users: users,//array of users passed to ejs
    userExists: userExists,//boolean value passed to ejs
    noUser: noUser//boolean valude passed to ejs
  });
});

router.post('/addUser', (req, res, next) => {
  const username = { name: req.body.username }; // stores value received from ejs in variable as key value pair
  // if checks to see if variable username appears in users array
  if(users.some(user => user.name === req.body.username)) {
    // if username shows up on list, changes boolean values from above
    // this allows an alert to show based on boolean value
    noUser = false;
    userExists = true;
  } else {
    // if username does not show, changes boolean values and pushes new value into the users array
    noUser = false;
    userExists = false;
    users.push(username);
  };
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUsername; // stores value received from ejs in variable as key value pair
  // if checks to see if variable name appears in users array
  if(users.some(user => user.name === req.body.remUsername)) {
    //if username shows up on list, updates boolean values and removes remUsername from users array
    const index = users.map(function(o) {
      return o.name;
    }).indexOf(remUser);
    if (index !== -1) {
      users.splice(index, 1);
    };
    userExists = false;
    noUser = false;
  } else {
    // if username does not show, updates boolean values
    userExists = false;
    noUser = true;
  };
  res.redirect('/ta02');
});

module.exports = router;
exports.users = users;
