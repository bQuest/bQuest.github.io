exports.add = function (req, res, vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The result is: ");
    res.write(String(sum));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};

exports.subtract = function (req, res, vals) {
    var diff = parseInt(vals.first) - parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The result is: ");
    res.write(String(diff));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};

exports.multiply = function (req, res, vals) {
    var product = parseInt(vals.first) * parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The result is: ");
    res.write(String(product));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};

exports.divide = function (req, res, vals) {
    var division = parseInt(vals.first) / parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The result is: ");
    res.write(String(division));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};
