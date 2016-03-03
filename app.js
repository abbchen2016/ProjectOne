var path = require('path');
var express = require('express');
var app = express();
var routers = require('./routers/routers.js');
var compression = require('compression');

app.use(compression());
app.use(express['static'](path.join(__dirname,'web')));

routers(app);
app.listen('80',function(){
    console.log('server run at :'+ new Date());
});