var multer = require('multer');
var cookieParser = require('./cookieParser');


var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, 'storage/uploads/');
    },
    filename: function (req, file, cb) {        
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
                storage: storage
            }).single('file');


module.exports = upload;            
/** API path that will upload the files */
