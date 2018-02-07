var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html;charset=UTF-8'});
    res.end('哈哈哈哈，这个会成功吗？');

});
server.listen(3000, '127.0.0.1');