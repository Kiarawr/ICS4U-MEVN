// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  ohip: {
    type: String
  },
  number: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  province: {
    type: String
  },
  postalCode: {
    type: String
  },
  birthYear: {
    type: Number
  },
  birthMonth: {
    type: Number
  },
  birthDay: {
    type: Number
  },
  sex: {
    type: String
  },
  notes: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);