var crypto = require('crypto')

module.exports = {
    createToken: function(cb) {
        return crypto.randomBytes(48).toString('hex');
    }
}