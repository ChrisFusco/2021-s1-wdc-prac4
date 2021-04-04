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
    unordered_list += "<li>" + logs[i] + "</li>";
  }

  res.send('\
  <!DOCTYPE html> \
    <html> \
        <head> \
            <title>Logs</title> \
        </head> \
        <body> \
          <ul> \
          ' + unordered_list + ' \
          </ul> \
        </body> \
    </html> \
  ');
});

var visited_first = false;
router.get('/first.html', function(req, res, next) {
  // Redirect
  if (visited_first) {
    res.redirect('/main.html');
  }
  else {
    res.send('\
    <!DOCTYPE html> \
      <html> \
          <head> \
              <title>First</title> \
          </head> \
          <body> \
            <h1><a href="main.html">Welcome</a></h1> \
          </body> \
      </html> \
    ');
  }
  visited_first = true;
});

router.get('/main.html', function(req, res, next) {
  if (visited_first) {
    res.send('\
    <!DOCTYPE html> \
      <html> \
          <head> \
              <title>First</title> \
          </head> \
          <body> \
            <h1>My main site</h1> \
            <p>Random text pog</p> \
          </body> \
      </html> \
    ');
  }
  // Redirect
  else {
    res.redirect("/first.html");
  }
});

var color2 = "red";
router.get('/color.txt', function(req, res, next) {
  res.send(color2);

  if (color2 == "red") {
    color2 = "yellow";
  }
  else if (color2 == "yellow") {
    color2 = "green";
  }
  else if (color2 == "green") {
    color2 = "blue";
  }
  else if (color2 == "blue") {
    color2 = "red";
  }
});

var logs2 = [];
router.get('/log.json', function(req, res, next) {
  logs2.push(new Date().toString());

  res.json(logs2);
});

router.get('/log-ro.json', function(req, res, next) {
  res.json(logs2);
});

router.get('/contact.ajax', function(req, res, next) {
  res.send("<a href='a1777739@student.adelaide.edu.au'>Link</a>");
});

router.get('/search.ajax', function(req, res, next) {
  res.send(" \
    <input type='text'> \
    <button>search</button> \
    ");
});

router.get('/about.ajax', function(req, res, next) {
  res.sendFile("about.ajax");
});

var accepted = false;
router.get('/accept', function(req, res, next) {
  accepted = true;
  res.sendStatus(200).end();
});

router.get('/content.ajax', function(req, res, next) {
  if (accepted) {
    res.send("<p>Paragraph 1</p><p>Paragraph 2</p>");
  }
  else {
    res.sendStatus(403).end();
  }
});



module.exports = router;
