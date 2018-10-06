const xlsx2json = require('xlsx-2-json')
const appRoot = require('app-root-path')

module.exports.create = function (req, res) {
    const filename = req.files[0].filename;
    const path = req.files[0].destination;
    const outpath = `${appRoot}\\outjson\\output.json`
    const temp = `${appRoot}\\upload\\${filename}`

    xlsx2json({
            input: `${temp}`,
            output: `${outpath}`
    }, 
        function(err, result) {
            if (err) {
            return res.status(401).json(err);
            } else {
                result.forEach(result => {
                    const obj = {
                        Номер: result.Номер,
                        Тип: result.Тип_БСО,
                        Подразделение: result.Подразделение,
                        Статус: result.Статус
                    }
                    console.log(obj)
                    return obj
                });
                // console.log(result)
                
            }
            return res.json(result)
        }    
    )
         
}
