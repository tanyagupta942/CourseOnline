const express = require('express');
const router = express.Router();
let Course = require("../models/course");

router.get('/', function(req, res) {
  Course.find({}, function(err, courses){
    if(err)
      res.render("404page");
    else{
      // console.log(courses);
      res.render("index", {data: courses});
    }
  });
});

router.get('/courses', function(req, res){
  Course.find({}, function(err, courses){
    if(err)
      res.render("404page");
    else{
      // console.log(courses);
      res.render("courses", {data: courses});
    }
  });
})

router.get('/about', function(req, res) {
  res.render("about");
});

router.get('/contact', function(req, res) {
  res.render("contact");
});

// router.get('/index', function(req, res) {
//   Course.create(.., function(err, res) {
//     console.log("Data Inserted")
//   });
//   res.send("ok");
// });

router.post('/', function(req, res) {
  // return res.json({});
});

router.get('*', function(req, res) {
  res.render("404page");
});

module.exports = router;
