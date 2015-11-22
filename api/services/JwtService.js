var jwt = require('jsonwebtoken');
 
module.exports = {
  // secret: sails.config.authentication.jwt.secret,
  // issuer: sails.config.authentication.jwt.issuer,
  // audience: sails.config.authentication.jwt.audience,

 
  /**
   * Create a token based on the passed user
   * @param user
   */
  createToken: function(user) {
    return jwt.sign({
        user: user.toJSON()
      },
      sails.config.authentication.jwt.secretOrKey,
      sails.config.authentication.jwt
      // {
      //   algorithm: sails.config.authentication.jwt.algorithm,
      //   expiresInMinutes: sails.config.authentication.jwt.expiresInMinutes,
      //   issuer: sails.config.authentication.jwt.issuer,
      //   audience: sails.config.authentication.jwt.audience
      // }
    );
  }
};