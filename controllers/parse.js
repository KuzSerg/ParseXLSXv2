const xlsx2json = require('xlsx-2-json')
const appRoot = require('app-root-path')
const fs = require('fs')
const error = require('../utils/errorHandler')
module.exports.create = function (req, res) {
    const filename = req.files[0].filename;
    // const path = req.files[0].destination;
    const outfile = 'outjson.json'
    const out = `${appRoot}/outjson/${outfile}`
    // const outpath = `${appRoot}\\outjson\\output.json`
    const temp = `${appRoot}\\upload\\${filename}`
    try{
        xlsx2json({
            input: `${temp}`,
            output: null
    }, 
        function(err, result) {
            if (err) {
            return res.json({error_code:1, err_desc: err, data:null});
            } else {
                var obj = result.map(element => {
                   return  object ={
                       "Номер": element.Номер,
                       "Тип": element.Тип_БСО,            
                       "Подразделение":element.Подразделение,
                       "Статус": element.Статус
                                    }
                   
                    // console.log(obj)
                });
                console.log(obj)
            }
        return res.status(200).json(obj)    
        })
        fs.unlinkSync(temp)
    } catch (e){
        res.json(error)
    }
}
