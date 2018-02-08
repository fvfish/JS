var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html;charset = UTF-8"});
    var urlstr = req.url;
    if (urlstr.substr(0,9) == '/student/') {  
        if (/^\d{3}$/.test(urlstr.substr(9))) {
          res.end('您查询的学生id为：'+ urlstr.substr(9)); 
        } else
        {
            res.end('学号位数不对');
        }
        
    }else if (urlstr.substr(0,9) == '/teacher/') {
        if (/^\d{3}$/.test(urlstr.substr(9))) {
            res.end('您查询的教师工号为：'+ urlstr.substr(9)); 
          } else
          {
            res.end('工号位数不对');
          }
    }
    res.end();
});
server.listen(3000, '127.0.0.1');