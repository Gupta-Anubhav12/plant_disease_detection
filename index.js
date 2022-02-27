const express =  require('express')
const app = express()
const fs = require('fs');
const path = require('path')
const plant_info = require('./Book1.json')
app.use(express.static(path.join(__dirname, 'public')));
// console.log(plant_info)
app.set('view engine','ejs')

app.set('views', path.join(__dirname,'/views'))
app.get('/',(req,res)=>{
        res.render('home.html')
})

app.get('/plant_info_page',(req,res)=>{
    res.render('home.ejs',{plant_info})
})

app.get('/choose_model',(req,res)=>{
    res.render('choose.ejs')
})
app.get('/:name',(req,res)=>{
    const {name}=req.params;
    let obj=plant_info[0]
    let size=name.length
    for (let i = 0; i < plant_info.length; i++) {
        if(name==plant_info[i].Name.substring(0,size))
        {
            obj=plant_info[i]
            break;
        }
  }
    res.render('info.ejs',{plant_info:obj}) 
})
app.listen(process.env.PORT || 3000)