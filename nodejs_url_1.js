var http = require('http');
var url =  require('url');
var server = http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;
    var name = query.name;
    console.log('收到了', name);
    res.writeHead(200, {'Content-type' : 'text/html;charset=UTF-8'});
    res.end();

})
server.listen(3000, '127.0.0.1');