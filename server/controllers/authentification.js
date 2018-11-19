const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')

// Encode user id and time stamp with secret
function tokenForUser (user) {
  const timestamp = new Date().getTime()
  // iat - issued at time, sub - subject
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function (req, res, next) {
  // res.send({ succes: 'true' })
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password

  // Check if user provided e-mail and password
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide e-mail and password.' })
  }
  // See if a user with the given email exists
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) { return next(err) }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    })
    // Save record to the database
    user.save(function (err) {
      if (err) { return next(err) }

      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) })
    })
  })
}
