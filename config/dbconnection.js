const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
// connectionString = 'mongodb://localhost/shoponline';
connectionString = 'mongodb://username:password@ds141812.mlab.com:41812/coursesonline';
mongoose.connect(connectionString, { useNewUrlParser: true })
  .then(function() {
    console.log("MongoDB Connected");
  })
  .catch(function(err) {
    console.log(err);
  });
