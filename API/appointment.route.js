// appointment.route.js

const express = require('express');
const appointmentRoutes = express.Router();

// Require Appointment model in our routes module
let Appointment = require('./appointment.model');

// Defined store route
appointmentRoutes.route('/add').post(function (req, res) {
  let appointment = new Appointment(req.body);
  appointment.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
appointmentRoutes.route('/').get(function (req, res) {
  Appointment.find(function(err, appointments){
    if(err){
      res.json(err);
    }
    else {
      res.json(appointments);
    }
  })
  .populate("patient")
  ;
});


// Defined edit route
appointmentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Appointment.findById(id, function (err, appointment){
    if(err) {
      res.json(err);
    }
      res.json(appointment);
  });
});

// Defined delete | remove | destroy route
appointmentRoutes.route('/delete/:id').delete(function (req, res) {
  console.log(req.body);
  console.log(req.params);

  Appointment.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err)
      res.json(err);
    else {
      Appointment.find(function(err, appointments){
        if (err)
          res.json(err);
        else
          res.json(appointments);
      })  
      .populate("patient")
      ;
    }
  });
});

module.exports = appointmentRoutes;