var bcrypt = require('bcrypt-nodejs');

module.exports = {
 
  /**
   * Hash the password field of the passed user.
   */
  hashPassword: function (password) {
    return bcrypt.hashSync(password);
  },
 
  /**
   * Compare user password hash with unhashed password
   * @returns boolean indicating a match
   */
  comparePassword: function(password, providedPassword){
    return bcrypt.compareSync(password, providedPassword);
  },
 

};