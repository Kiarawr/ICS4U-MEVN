// post.route.js

const express = require('express');
const postRoutes = express.Router();

// Require Post model and Appointment model in our routes module
let Post = require('./post.model');
let Appointment = require('./appointment.model');

// Defined store route
postRoutes.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
  Post.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});

// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
      post.firstName = req.body.firstName;
      post.lastName = req.body.lastName;
      post.ohip = req.body.ohip;
      post.number = req.body.number;
      post.email = req.body.email;
      post.address = req.body.address;
      post.city = req.body.city;
      post.province = req.body.province;
      post.postalCode = req.body.postalCode;
      post.birthYear = req.body.birthYear;
      post.birthMonth = req.body.birthMonth;
      post.birthDay = req.body.birthDay;
      post.sex = req.body.sex;
      post.notes = req.body.notes;
      post.save().then(() => {
        res.json('Update complete');
      })
      .catch(() => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').delete(function (req, res) {
  Post.findById({_id: req.params.id}, function(err, post){
    Appointment.deleteMany({
      "patient": {
        $in: post._id
      }
    }, function(err) {
      if(err)
        res.json(err);
      else {
        post.deleteOne();
        Post.find(function(err, posts){
          if (err)
            res.json(err);
          else
            res.json(posts);
        });
      }}
      );
    
  });

});

module.exports = postRoutes;