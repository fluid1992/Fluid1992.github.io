var express = require('express');
var app = express();
var swig = require('swig');
var mongoose = require('mongoose');
var bodyparpser = require('body-parser');
// var admin = require('./js/admin.js')
var mydata = require('./data/listData.js');
var artModel = require('./models/artModel');
var mysendData = {
    code:0,
    amgee:''
}
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
app.get('/my',function(req,res){
    // res.send('zhe shi shen me gui o ~~~');
    // res.sendFile(__dirname+'/views/index.html');
    res.render('index',{
        sendD:mydata
    });
});
swig.setDefaults({cache:false});//设置swig模块是否缓存
app.get('/my1',function (req,res) {
    console.log(req.query.id);
    var myId = req.query.id;
    var a = 0;
    for(var i = 0;i<mydata.length;i++){
        console.log(mydata[i].id)
        if(myId == mydata[i].id){
            console.log(mydata[i].id);
            a=i;
        }
    }
    console.log(a);

    res.render('myHtml',{
        sendO:mydata[a]
    });
});
app.listen(8083);
app.use(bodyparpser.urlencoded({extended:true}));

app.get('/myarc',function (req,res) {
    res.render('public');
});
app.get('/mylist',function (req,res) {
    artModel.find().then(function (data) {
        res.render('list',{
            sendlist:data
        });
    })
});
app.get('/mylist/del',function (req,res) {
    console.log(req.query.id);
    artModel.remove({_id:req.query.id}).then(function (data) {
        mysendData.amgee = '删除成功';
        res.send(mysendData);
    })
})
app.post('/myarcsend',function (req,res) {
    console.log('进来了进来了');
    console.log(req.body);

    new artModel({
        title:req.body.title,
        author:req.body.author,
        time:req.body.time,
        content:req.body.content
    }).save().then(function (result) {
        mysendData.amgee = '发送成功';
        res.send(mysendData);
    })
})
app.post('/mylist/sech',function (req,res) {
    console.log(1111);
    var searchT = req.body.myAuthorFind;
    var reg=new RegExp(searchT);
    artModel.find({author:reg}).then(function (d) {
        console.log(d);
        res.send(d);
    })
})

//编辑文章
var editId = '';
app.get('/edit',function (req,res) {
    editId = req.query.id;
    artModel.find({_id:editId}).then(function (d) {
        console.log(d)
        res.render('edit',{
            editText:d
        })
    })
})

app.post('/submit',function (req,res) {
    console.log(req.body);
    artModel.update({_id:editId},{
        title:req.body.title,
        author:req.body.author,
        time:req.body.time,
        content:req.body.content
    }).then(function (re) {
        mysendData.amgee='修改成功';
        res.send(mysendData);

    })
})

app.use('/public',express.static(__dirname+'/public'));
mongoose.connect('mongodb://172.18.61.138:3000',function (err) {
    if (err){
        console.log("连接失败");
    }else {
        console.log("连接成功");
    }
})