var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Yay, we have connected");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', {
      title: 'My Utterly Ignored ToDo Lists',
      subtitle: "Add stuff you'll keep putting off here:",
      list_title: 'One List to Rule Them All'
    }
  );
});

module.exports = router;
