var log = require('log4node');
log.reconfigure({
    level: 'info',
    file: 'app.log'
});
log.setPrefix("[%d] - %p -%l ");

module.exports = log;