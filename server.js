let http = require("http");

http.createServer((req,res)=>{
    res.write("hello");
    res.end();
}).listen(2001);