const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
})

// load schema into mongoose that coresponds to the collection called userSchema

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass
