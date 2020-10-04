const express = require('express');
const app = express();
const registrationRoute = express.Router();

let Registration = require('../models/Registration');

// Add Registration
registrationRoute.route('/create').post((req, res, next) => {
  Registration.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Registration
registrationRoute.route('/').get((req, res) => {
  Registration.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single registration
registrationRoute.route('/read/:id').get((req, res) => {
  Registration.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update registration
registrationRoute.route('/update/:id').put((req, res, next) => {
  Registration.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete registration
registrationRoute.route('/delete/:id').delete((req, res, next) => {
  Registration.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = registrationRoute;