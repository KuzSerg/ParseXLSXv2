const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, './upload')
    },
    filename(req, file, cb){
        const date = moment().format('DDMMYYYY-HHmmsss-SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if(['xls','xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1)
    {
        return cb(new Error('Wrong extension type'))
    } else{
        cb(null, true)
    }
}

const limitSize = {
    fileSize: 1024*1024*10
}

module.exports = multer({storage, fileFilter, limitSize})