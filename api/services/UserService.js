

module.exports = {
    hashPassword: function(user) {
        if (user.password) {
            user.password = PasswordService.hashPassword(user.password);
        }
    },
    createActivationToken: function(user) {
        user.activationToken = TokenService.createToken();
        user.activated = false;
    },
    activate: function(user, activationToken) {
        user.activationToken = "";
        user.activated = true;
    },
    returnUserAndJwtToken: function(user) {
        return {
            user: user,
            token: JwtService.createToken(user)
        };
    }
}