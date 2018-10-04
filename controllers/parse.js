const xlsx2json = require('xlsx-2-json')

module.exports.create = function (req, res) {
// const body = req.body
// const files =req.files


    if((req.files) != null)
    {
        res.status(200).json(req.files)
        console.log(req.files)
        console.log(req.files[0].destination)
    }else{
        res.status(401).json({message:"Давай до свидания"})
    }
}