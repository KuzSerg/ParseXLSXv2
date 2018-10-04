const appRoot = require('app-root-path')
const log4js = require('log4js')

log4js.configure({
    appenders:{
        console: {type: 'console', layout: {type: 'basic'}},
        file: {type: 'file', filename: `${appRoot}/log/app.log`}
    },
    categories: {
        default: {appenders: ['console'], level: 'trace'},
        log4jslog: {appenders: ['file'], level: 'debug'}
    }
})

const logger = log4js.getLogger('log4jslog')


module.exports = logger