var http = require('http');
var myserver = http.createServer();

myserver.on('listening',function () {
    console.log('我在监管你了');
});
myserver.on('request',function (req,res) {
    res.write('wa~,welcome ');
    res.end();
});
myserver.listen(8080,'172.18.61.138');