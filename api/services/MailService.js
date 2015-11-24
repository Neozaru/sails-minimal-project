var MailerService = require('sails-service-mailer');
var mailer = MailerService('direct', sails.config.mail.direct);

function send(to, subject, html, text) {
  return mailer.send({
    subject: subject,
    to: to,
    html: html,
    text: text
  })
}

module.exports = {
  activationMail: function(user) {
    return TemplatingService.renderActivationMail(user).then(function(content) {
      /* TODO: Store subject this in an internationalization tool*/
      return send(user.email, "Welcome", content.html, content.text);
    });
  },

}