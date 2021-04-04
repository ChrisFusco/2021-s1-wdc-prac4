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

module.exports = router;
