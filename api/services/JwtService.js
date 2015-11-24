var jwt = require('jsonwebtoken');
 
module.exports = {

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
    );
  }
};