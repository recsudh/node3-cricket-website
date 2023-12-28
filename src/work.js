const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const fetchdata=require('../utils/app')
// console.log(__dirname);
const dir = path.join(__dirname,'../view/main')
const partialpath=path.join(__dirname,'../view/templete')
hbs.registerPartials(partialpath)

app.set('view engine','hbs')
app.set('views',dir)
const publicdir=path.join(__dirname,'../public')
console.log(publicdir);
app.use(express.static(publicdir))
app.get('',(req,res)=>{
    res.render('index',{
        title:'ICC'
    })
})
// app.get('/info',(req,res)=>{
//     console.log(fetchdata());
// })
app.listen(3000,()=>{
    console.log('server is on');
})