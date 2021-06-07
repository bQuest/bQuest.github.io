var http = require('http');
var url = require('url');
var fs = require('fs');
var calmod = require('./calmodule.js');

const srv = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    fs.readFile('./calcform.html', function(err, data){        
        var filename = "." + q.pathname;
        debugger;
        if (q.pathname == "./cal.js") { 
            if (q.query.operator == '+')
                calmod.add(req, res, q.query);
            else if (q.query.operator == '/')
                calmod.divide(req, res, q.query);
            else if (q.query.operator === '*')
                calmod.multiply(req, res, q.query);
            else if (q.query.operator === '-')
                calmod.subtract(req, res, q.query);
            else {
                console.log("no valid operator selected.");
                throw err;
            }
                
        }  
        else
            fs.readFile(filename, function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 Not Found");
                }
                res.writeHead(200);  // Content-Type not included
                res.write(data);
                return res.end();
            });
    });
    
});

srv.listen(8090);