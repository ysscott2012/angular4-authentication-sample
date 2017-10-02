var _ = require('lodash');
var express = require('express');
var users = require('../database/user.json');
var fs = require('fs');
var path = require('path');

var jwt = require('jsonwebtoken');
var securit = require('../middleware/securit')


var router = express.Router();
/**
*  Login
*/
router.post('/login', function(req, res) {

  // set up a message object to pass to client side.
  var message = { activity: 'Login', success: false, payload: null, alertMessage: '' };

  // check username and password have been entered by a user.
  if (!req.body.username || !req.body.password) {
    message.alertMessage = 'Usernamd or password cannot be empty.';
    return res.json(message);
  }

  // check if database has entered record.
  const user = _.find(users, {username: req.body.username});

  if (!user) {
    message.alertMessage = 'Invalid username; the entered username is not in the system';
    return res.json(message);
  } else {
    if (user.password != req.body.password) {
      message.alertMessage = 'Password doesn\'t not match to the system';
      return res.json(message);
    }
    else {
      var token = jwt.sign(_.omit(user, 'password'), securit.privateKey(), {expiresIn: 3600});
      message.success = true;
      message.alertMessage =  'Welcome ' + user.username + ' !'
      message.payload = {
        user: user,
        token: token
      }
      return res.json(message);
    }
  }
})

/**
*  Register a new user
*/
router.post('/signup', function(req, res) {

  // set up a message object to pass to client side.
  var message = { activity: 'Signup', success: false, payload: null, alertMessage: '' };

  // check username and password have been entered by a user.
  if (!req.body.username || !req.body.password) {
    message.alertMessage = 'Usernamd or password cannot be empty.';
    return res.json(message);
  }

  // check if database has entered record.
  const user = _.find(users, {username: req.body.username});

  if (!user) {
    users.push(req.body);
    users = _.sortBy(users, 'username');
    fs.writeFile(path.join(__dirname, '../database/user.json'), JSON.stringify(users), function(err) {
      if (err) {
        console.log(err);
        message.alertMessage = 'Adding record error';
        return res.json(message);
      }
      else {
        message.alertMessage = 'Signed up sucessfully';
        message.payload = req.body;
        message.success = true;
        return res.json(message);
      }
    })
  } else {
    message.alertMessage = 'Username is already exist';
    return res.json(message);
  }

})


module.exports = router;
