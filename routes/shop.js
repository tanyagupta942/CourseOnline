const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.render("index");
});

router.get('/about', function(req, res) {
  res.render("about");
});

router.get('/contact', function(req, res) {
  res.render("contact");
});

router.post('/', function(req, res) {
  // return res.json({});
});

router.get('*', function(req, res) {
  res.send("404");
});

module.exports = router;
