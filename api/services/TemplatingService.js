var path = require('path');
var emailTemplates = require('email-templates');
var templatesDir = path.join(__dirname, '../../templates/activation_mail');



var emailTemplate = new emailTemplates.EmailTemplate(templatesDir);

module.exports = {
	renderActivationMail: function(user) {
	    return emailTemplate.render({user: user, statics: sails.config.statics});
	}

}