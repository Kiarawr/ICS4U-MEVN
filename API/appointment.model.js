// appointment.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Appointment
let Appointment = new Schema({
  apptDate: {
    type: Date
  },
  apptTime: {
    type: String
  },
  patient: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
  }
},{
    collection: 'appointments'
});

module.exports = mongoose.model('Appointment', Appointment);