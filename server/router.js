const Authentification = require('./controllers/authentification')

module.exports = function (app) {
  app.post('/signup', Authentification.signup)
}
