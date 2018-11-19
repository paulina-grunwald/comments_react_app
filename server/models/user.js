const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
})

// On Save Hook, encrypt password
// pre - before saving model, run this function
userSchema.pre('save', function (next) {
  // Get access to user model
  const user = this
  // Generate a salt then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return next(err) }
    // Encrypt password using salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) { return next(err) }
    })
    // Overwritte plain text password with encrypted password
    user.password = hash
    next()
  })
})
// load schema into mongoose that coresponds to the collection called userSchema
// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass
