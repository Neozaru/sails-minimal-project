module.exports.authentication = {
    jwt: {
        secretOrKey: process.env.tokenSecret || '4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM',
        algorithm: 'HS256',   
        issuer : 'neozaru.info',
        audience: 'neozaru.info',
        expiresIn: 60 * 60 * 24
    },
    local: {
        usernameField: 'email',
        passwordField: 'password'
    }
}