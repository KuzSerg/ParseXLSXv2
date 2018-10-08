const xlsx2json = require('xlsx-2-json')
const appRoot = require('app-root-path')
const fs = require('fs')

module.exports.create = function (req, res) {
    const filename = req.files[0].filename;
    const path = req.files[0].destination;
    const outpath = `${appRoot}\\outjson\\output.json`
    const temp = `${appRoot}\\upload\\${filename}`

    xlsx2json({
            input: `${temp}`,
            output: null
    }, 
        function(err, result) {
            if (err) {
            return res.status(401).json(err);
            } else {
                var obj = result.map(function(element) {
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
            
        }    
    )
    try{
        fs.unlinkSync(temp)
    }
    catch (e) {
        console.log(e)
    }     
}
