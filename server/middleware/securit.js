/**
 * get private key for token
 */
exports.privateKey = function() {
  var date = new Date();
  return date.getFullYear() + date.getMonth() + date.getDate() + 'authentication-sample';
}
