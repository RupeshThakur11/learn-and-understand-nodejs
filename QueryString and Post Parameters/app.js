var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', {
        ID: req.params.id
    });
});

app.post('/person', urlencodedParser, function(req, res) {
    res.send(`Welcome, ${req.body.firstname}.`);
    console.log(`First name: ${req.body.firstname}, Last name: ${req.body.lastname}.`);    
});

app.post('/personjson', jsonParser, function(req, res) {
    console.log(`[json]First name: ${req.body.firstname}, Last name: ${req.body.lastname}.`);
});

app.listen(port);