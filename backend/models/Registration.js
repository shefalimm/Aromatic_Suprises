const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Registration = new Schema({
   fname: {
      type: String
   },
   lname: {
      type: String
   },
   email: {
    type: String
   },
   mnumber: {
      type: Number
   },
   gender: {
    type: String
   },
   address: {
    type: String
   },
   password: {
    type: String
   },
   
}, {
   collection: 'registrations'
})

module.exports = mongoose.model('Registration', Registration)