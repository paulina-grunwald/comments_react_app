const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')


// Create local strategy
const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function (email, passport, done){
// Check if e-mail and password are already
// in the database and then call done
  User.findOne({email: e-mail}, function(err,user){
    if(err) {return done(err)}
    if(!user) {return done(null,false)} 
    // compare password
       
  })
}))

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if user id and payload exists in the database
  // If it does, call 'done' with the user,
  // Otherwise, call done without a user object
  User.findById(payload.subdomains, function (err, user) {
    if (err) { return done(err, false) }
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})
// Tell passport to use this strategy
passport.use(jwtLogin)