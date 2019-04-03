const Token = require('../token.js')
const bodyParser = require('body-parser');
const querys = require('../../../src/api/servers/servers.js')
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const mutiparty = require('connect-multiparty')()
const pathT = require('path')
const fs = require('fs')

module.exports = function (app) {
    app.use(urlencodedParser)
    //上传头像
    app.post('/updat',mutiparty,(req,res)=>{
        const {path,name} = req.files.avatar
        const targetFile = pathT.join(process.cwd() + '/static/upload',name)
        var sourceFile = fs.readFileSync(path)
        var error = fs.writeFileSync(targetFile,sourceFile)
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
    //登录
    app.post("/user", (req, res) => {
        let { username, userpwd } = req.body
        let token = Token.Token (username,userpwd)
        const sql = 'select * from student_user where username=?'
        querys.query(sql,[username]).then(result =>{
            if(result.length){
                const sqlpwd = 'select * from student_user where userpwd=?'
                querys.query(sqlpwd,[userpwd]).then(resultpwd =>{
                    if(resultpwd.length){
                        const sqltoken = 'UPDATE Student_exam.student_user SET token=? WHERE username=?'
                        querys.query(sqltoken,[token,username]).then(resultpwd =>{
                            if(resultpwd){
                                res.send()
                            }
                        })
                        res.send({
                            code:1,
                            msg:'密码和用户名正确',
                            result,
                            token
                        })
                    }else{
                        res.send({
                            msg:'密码不正确',
                            code:2,
                        })
                    }
                })
            }else{
                res.send({
                    code:0,
                    msg:'用户名不正确',
                })
            }
        })
    })
}