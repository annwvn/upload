const mutiparty = require('connect-multiparty')
const pathT = require('path')
const fs = require('fs')
const resolve = require('resolve')

module.exports = (app) =>{
    app.get('/updat',mutiparty,(req,res)=>{
        const {path,name} = req.files.file
        const targetFile = pathT.join('/static/upload',name)
        const targetPath  = resolve(targetFile)
        var sourceFile = fs.readFileSync(path)
        var error = fs.writeFileSync(targetPath,sourceFile)
        if(!error){
            res.send({
                code:0,
                path:targetFile
            })
        }else{
            res.send({
                code:1,
                msg:'上传失败'
            })
        }
    })

    app.get('/file',mutiparty,(req,res)=>{
        const {path,name} = req.files.file
        const targetFile = pathT.join('/static/up',name)
        const targetPath  = resolve(targetFile)
        var sourceFile = fs.readFileSync(path)
        var error = fs.writeFileSync(targetPath,sourceFile)
        if(!error){
            res.send({
                code:0,
                path:targetFile
            })
        }else{
            res.send({
                code:1,
                msg:'上传失败'
            })
        }
    })
}