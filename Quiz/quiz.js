var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Number Quiz</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>The Number Quiz</h1>");
    res.write("<p>Your current score is " + "score");
    res.write("<p>Guess the next number in the squence. </p>");
    res.write("<p> Your answer: <input type='text' id='answer'> </p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
}).listen(8089);