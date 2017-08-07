var express = require('express');
var app = express();
var swig = require('swig');
var mongoose = require('mongoose');
var userModel = require('./models/usersModel')
var bodyparpser = require('body-parser');

app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});

app.get('/nihao',function (req,res) {
    res.render('index');
});
app.get('/about',function (req,res) {
    res.render('about');
});
app.get('/typo',function (req,res) {
    res.render('typo');
});
app.get('/gallery',function (req,res) {
    res.render('gallery');
});
app.get('/contact',function (req,res) {
    res.render('contact');
});

app.get('/login',function (req,res) {
    res.render('login');
});

app.post('/save',function (req, res) {
    new userModel({
        userEmail:req.body.Email,
        password:req.body.passward
    }).save().then(function (saveOk) {
        req.send('保存成功');
        console.log('保存成功');
    })
})




app.listen(8081);

swig.setDefaults({cache:false});//设置swig模块是否缓存
app.use('/public',express.static(__dirname+'/public'));
app.use(bodyparpser.urlencoded({extended:true}));
mongoose.connect('mongodb://172.18.61.138:3001',function (err) {
    if (err){
        console.log("连接失败");
    }else {
        console.log("连接成功");
    }
})