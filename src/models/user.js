//const validator = require('validator')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  born: {
    type: Number
  },
  timeline: {
    type: String
  },
  alliegance: {
    type: [String],
    default: undefined
  },
  playedBy: {
    type: String
  },
  titles: {
    type: [String],
    default: undefined
  },
  father: {
    type: String
  },
  mother: {
    type: String
  },
  spouse: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User

// const yo = new User({
//   name: "Barbara",
//   age: 28,
//   email: 'barbara@tec.mx',
//   password: 'xxx'
// })
//
// yo.save().then(function(data) {
//   console.log(data)
// }).catch(function(error) {
//   console.log('Error: ', error)
// })
