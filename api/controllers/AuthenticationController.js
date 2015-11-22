/**
 * AuthenticationController
 *
 * @description :: Server-side logic for managing authentications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var passport = require('passport');

module.exports = {
    create: function(req, res) {
        passport.authenticate('local', function(error, user, info) {
          if (error) return res.serverError(error);
          if (!user) return res.unauthorized(null, info && info.code, info && info.message);
         
          return res.ok({
            token: JwtService.createToken(user),
            user: user
          });
        })(req, res);
    }
};

