var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
    if (req.url == '/yuan') {
        fs.readFile('./yuan.html', function(err, data){
            res.writeHead(200, {'Content-type' : 'text/html;charset=UTF-8'});
            res.end(data);
        })
        
    }  else if (req.url == '/fan') {
        fs.readFile('./fan.html', function(err, data){
            res.writeHead(200, {'Content-type' : 'text/html;charset=UTF-8'});
            res.end(data);
        });
        
    } else if (req.url == '/timg.jpg') {
        fs.readFile('./timg.jpg', function(err, data){
            res.writeHead(200, {'Content-type' : 'img/jpg'});
            res.end(data);
        });
        
    }
    else{
        res.end('哈哈哈，没有这个页面！');
    }
});
server.listen(3000, '127.0.0.1');