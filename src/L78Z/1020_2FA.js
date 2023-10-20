const speakeasy = require('speakeasy');

const secret = 'A5L7WTVQ56WJAPAS';

const code = speakeasy.totp({
  secret: secret,
  encoding: 'base32'
});

console.log(code);