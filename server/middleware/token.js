

var jwt = require('jsonwebtoken');
var securit = require('./securit');

module.exports = function(options) {
  return function(req, res, next) {
    // Implement the middleware function based on the options object
    // request is from customized HttpService in angular
    if (req.headers.hasOwnProperty('authorization'))
    {
      var token = req.headers['authorization'].split(' ')[1];
      if (token != 'null') {
        jwt.verify(token, securit.privateKey, function(err, decoded) {
          if (err) {
            console.log(err);
            return
          }
          var decoded = jwt.decode(token)
          //console.log(decoded.user)
          next()
        });
      } else {
        console.log('User is not logged in, and try to access API: ' + req.originalUrl);
      }
    }
  }
}
