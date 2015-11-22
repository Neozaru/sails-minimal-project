/**
 * I don't know where to put initialization stuff in stails, so I will call
 * this "init()" from config/boostrap
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;


/**
 * Triggers when user authenticates via local strategy
 */
function _onLocalStrategyAuth(email, password, next) {

  User.findOne({email: email})
    .exec(function (error, user) {
      if (error) return next(error, false, {});
 
      if (!user) return next(null, false, {
        code: 'E_USER_NOT_FOUND',
        message: email + ' is not found'
      });
 
      // TODO: replace with new cipher service type
      if (!PasswordService.comparePassword(password, user.password))
        return next(null, false, {
          code: 'E_WRONG_PASSWORD',
          message: 'Password is wrong'
        });
 
      return next(null, user, {});
    });
}

/**
 * Triggers when user authenticates via JWT strategy
 */
function _onJwtStrategyAuth(payload, next) {
  var user = payload.user;
  return next(null, user, {});
}


module.exports = {
    init: function() {
        passport.use(new LocalStrategy(sails.config.authentication.local, _onLocalStrategyAuth));
        passport.use(new JwtStrategy(sails.config.authentication.jwt, _onJwtStrategyAuth));
    }
}