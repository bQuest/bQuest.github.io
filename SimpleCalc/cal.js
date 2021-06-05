var http = require('http');
var url = require('url');
var fs = require('fs');
var calmod = require('./calmodule.js');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        } 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8089);

// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     fs.readFile('./calcform.html', function(err, data){
//         var filename = "." + q.pathname;
//         if (q.pathname == "/cal.js")
//             switch(document.getElementById("by").value){
//                 case "+":
//                     calmod.add(req, res, q.query);
//                     break;
//                 case "/":
//                     calmod.divide(req, res, q.query);
//                     break;
//                 case "*":
//                     calmod.multiply(req, res, q.query);
//                     break;
//                 case "-":
//                     calmod.subtract(req, res, q.query);
//                     break;
//             }
            
//         else
//             fs.readFile(filename, function (err, data) {
//                 if (err) {
//                     res.writeHead(404, { 'Content-Type': 'text/html' });
//                     return res.end("404 Not Found");
//                 }
//                 res.writeHead(200);  // Content-Type not included
//                 res.write(data);
//                 return res.end();
//             });
//     });
    
// }).listen(8099);
