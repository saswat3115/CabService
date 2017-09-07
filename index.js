var express = require('express');
var cookieParser = require('./app/cookieParser');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var port = 8086;
app.listen(port);

app.disable('x-powered-by');
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cookieParser());

require('./app/api')(app);
exports = module.exports = app;

// continue process any exception thrown in nodejs
process.on('uncaughtException', function (error) {
    console.dir(error);
});

console.log("web server started at port " + port);