const express = require('express');
const app = express();
const contactusRoute = express.Router();

let Contactus = require('../models/Contactus');

// Add Contactus
contactusRoute.route('/create').post((req, res, next) => {
    Contactus.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Contactus
contactusRoute.route('/').get((req, res) => {
    Contactus.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Contactus
contactusRoute.route('/read/:id').get((req, res) => {
    Contactus.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Contactus
contactusRoute.route('/update/:id').put((req, res, next) => {
    Contactus.findByIdAndUpdate(req.params.id, {
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

// Delete Contactus
contactusRoute.route('/delete/:id').delete((req, res, next) => {
    Contactus.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = contactusRoute;