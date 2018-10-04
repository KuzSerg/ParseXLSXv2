const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, './upload')
    },
    filename(req, file, cb){
        const date = moment().format('DDMMYYYY-HHmmsss-SSS')
        cb(null, `${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.mimetype === 'application/vnd.ms-excel')
    {
        
        cb(null, true)
    } else{
        cb(null, false)
    }
}

const limitSize = {
    fileSize: 1024*1024*10
}

module.exports = multer({storage, fileFilter, limitSize})