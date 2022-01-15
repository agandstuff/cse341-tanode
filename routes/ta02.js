//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [{name:'Helen'}, {name: 'Don'}, {name: 'Linda'}];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA02: true, // For HBS
    contentCSS: true, // For HBS
    users: users
  });
});

router.post('/addUser', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;
  const index = users.indexOf(remUser);
  if (index !== -1) {
    users.splice(index, 1);
  }
  res.redirect('/ta02');
});

module.exports = router;
exports.users = users;
