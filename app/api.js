var fs = require('fs');
var rand_token = require('rand-token');
var db = require('./repository');
var log = require('./logger');
var cookieParser = require('./cookieParser');

module.exports = function (app) {

    //Router(app);

    app.get('*', function (req, res) {
        // use couchbase to get all nerds in the database 
        res.sendfile('./public/views/index.html');
    });


    app.post('/api/auth', function (req, res) {
        var body = JSON.parse(JSON.stringify(req.body));
        var auth_user = db.auth(body.email, body.password);
               
        if (auth_user.length > 0) {       
            let token = buildUserToken(auth_user[0]);  
            db.initiateToken(token);
            res.send(token);
        } else {
            res.status(404).send();
        }
    });

    app.post('/api/register', function (req, res) {
        var body = JSON.parse(JSON.stringify(req.body));
        if (db.findByEmail(body.email).length > 0) {
            res.status(409).send(false);
        } else {
            db.save(body);
            res.send(body.fname);
        }

    });

    app.post('/api/allusers', function (req, res) {   
        console.log(req.headers.authorization);            
        res.send(db.findAll());
    });


}


function buildUserToken(user_json){        
    return {"fname":user_json.fname, 
            "email": user_json.email, 
            "token": rand_token.generate(32), 
            "startTime": new Date().toUTCString()};
}