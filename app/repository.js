var db = require('diskdb');
console.log(__dirname);
db.connect('storage', ['user','userSession']);
// db.connect('storage',['userSession']);


exports.initiateToken = function (token) {
    db.userSession.save(token);
};

exports.retriveToken = function (token) {
    return db.userSession.find(token);
};

exports.save = function (jsonData) {
    db.user.save(jsonData);
};

exports.findByEmail = function (email) {
    return db.user.find({
        "email": email
    });
};

exports.findAll = function () {
    return db.user.find();
};

exports.auth = function (email, password) {
    return db.user.find({
        "email": email,
        "password": password
    });
};