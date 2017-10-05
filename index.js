var express = require('express');
var cookieParser = require('./app/cookieParser');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var favicon = require('serve-favicon')
var path = require('path')


var port = 8086;
app.listen(port);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
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
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

//     function ignoreFavicon(req, res, next) {
//         if (req.originalUrl === '/favicon.ico') {
//           res.status(204).json({nope: true});
//         } else {
//           next();
//         }
//       }

// app.use(ignoreFavicon);    

require('./app/api')(app);
exports = module.exports = app;

// continue process any exception thrown in nodejs
process.on('uncaughtException', function (error) {
    console.dir(error);
});

console.log("web server started at port " + port);