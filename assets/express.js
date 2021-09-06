var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path'); //系统路径模块
//创建get接口
app.get('/list', function (req, res) {
    fs.readFile('./list.json', 'utf-8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});
var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://localhost:%s", port);
});
