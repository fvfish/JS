
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req, res){
    var pathstr = url.parse(req.url).pathname; 
    if (pathstr == '/'){
        pathstr = 'index.html';
    }
    var extname = path.extname(pathstr);
    console.log(extname);
    
    fs.readFile('./test/'+pathstr, function(err, data){
        if (err) {
            fs.readFile('./test/404.html', function(err, data){
                res.writeHead(404, {"Content-type":"text/html;charset=UTF-8"});
                res.end(data);
            });
            return;
        };
        res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});//这里要补全所有文件类型的MIME
        res.end(data);
    });
}).listen(3000, '127.0.0.1');