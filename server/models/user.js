const mongoose = require('momgose')
const schema = mongoose.schema

// define user model
const userSchema = new schema({
  email: { type: String, unique: true, lowercase: true },
  password: String

})

// Create the model class
// load schema into mongoose that coresponds to the collection called userSchema
const ModelClass = mongoose.model('user', userSchema)
// Export Model
module.export == ModelClass
