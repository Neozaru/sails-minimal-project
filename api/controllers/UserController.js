/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    create: function(req, res) {
        User.create(_.omit(req.allParams(), 'id'))
        .then(function(user, err) {
            return MailService.activationMail(user)
            .then(function() {
                return UserService.returnUserAndJwtToken(user);
            });
        })
        .then(res.created)
        .catch(res.serverError);
    },
    activate: function(req, res) {
        User.findByIdAndActivationToken(req.allParams().id, req.allParams().activationToken)
        .then(function(user, err) {
            if (!user) {
                return res.notFound();
            }
            UserService.activate(user);
            user.save();
            return UserService.returnUserAndJwtToken(user);
        })
        .then(res.ok)
        .catch(res.serverError);
    }
};

