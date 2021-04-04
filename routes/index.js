var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var data = [];
router.get('/last.txt', function(req, res, next) {
  if (data.length == 0) {
    res.send('<!DOCTYPE html> \
    <html> \
        <head> \
            <title>Last</title> \
        </head> \
        <body> \
        </body> \
    </html> \
    ');
  }
  else {
    res.send('<!DOCTYPE html> \
    <html> \
        <head> \
            <title>Last</title> \
        </head> \
        <body> \
        ' + data[0] + ' \
        </body> \
    </html> \
    ');
  }
  data[0] = new Date().toString();
});

var color = "red";
router.get('/color.html', function(req, res, next) {
  res.send('\
  <!DOCTYPE html> \
    <html> \
        <head> \
            <title>Color</title> \
        </head> \
        <body> \
          <h1 style="color: ' + color + ';">' + color + '</h1> \
        </body> \
    </html> \
  ');

  if (color == "red") {
    color = "yellow";
  }
  else if (color == "yellow") {
    color = "green";
  }
  else if (color == "green") {
    color = "blue";
  }
  else if (color == "blue") {
    color = "red";
  }
});

var logs = [];
router.get('/log.html', function(req, res, next) {
  logs.push(new Date().toString());

  var unordered_list = "";
  for (var i = 0; i < logs.length; i++) {
    unordered_list += "<li>" + logs[i] + "</li>"
  }

  res.send('\
  <!DOCTYPE html> \
    <html> \
        <head> \
            <title>Color</title> \
        </head> \
        <body> \
          <ul> \
          ' + unordered_list + ' \
          </ul> \
        </body> \
    </html> \
  ');
});

module.exports = router;
