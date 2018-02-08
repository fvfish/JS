var http = require('http');
var url =  require('url');
var server = http.createServer(function(req, res){
    var query = url.parse(req.url,true).query;
    var name = query.name;
    var age = query.age;
    var sex = query.sex;
    res.end('收到了', name + age + sex);
})
server.listen(3000, '127.0.0.1');