/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports = {
  schema: true,
  attributes: {
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true  
    },
    activationToken: {
        type: 'string'
    },
    activated: {
        type: 'boolean',
        defaultsTo: false
    },
    toJSON: function() {
        return _.omit(this.toObject(), "password", sails.config.environment === 'production' ? "activationToken" : "");
    }
  },
  findByIdAndActivationToken: function(id, activationToken) {
    return User.findOne({id: id, activationToken: activationToken});
  },
  beforeUpdate: function (user, next) {
    UserService.hashPassword(user);
    next();
  },
  beforeCreate: function (user, next) {
    UserService.hashPassword(user);
    UserService.createActivationToken(user);
    next();
  }
};

// module.exports.plugin(require('mongoose-token'));
