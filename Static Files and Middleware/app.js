var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// whenever a request sent and matches /assets, express will find a static file in /public
app.use('/assets', express.static(__dirname + '/public'));

// Custom Middleware
// app.use matches a route, and execute a function.
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.send(`<html>
                <head>
                    <link href="/assets/style.css" type="text/css" rel="stylesheet" />
                </head>
                <body>
                    <h1>Hello world!</h1>
                </body>
            </html>`);
});

app.listen(port);