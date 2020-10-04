const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define collection and schema
let Contactus = new Schema({
    name: {
       type: String
    },
    email: {
     type: String
    },
    subject: {
     type: String
    },
    message: {
     type: String
    },
    
 }, {
    collection: 'contactus'
 })
 
 module.exports = mongoose.model('Contactus', Contactus)