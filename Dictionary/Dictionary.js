const express = require('express');
const path = require('path');
// var wrd = require('./word.js');
var bodyParser = require("body-parser");

const app = express();

//load public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'public', 'dict.html'));
    
});

app.post('/', (req, res) => {
    console.log('you reached here');
    const sql = require('mysql');

    module.exports.wordFilter = function (par) {
        var q = "SELECT wordtype, definition FROM entries.entries WHERE word LIKE " + sql.escape(par);
        // var q = "SELECT wordtype, definition FROM entries.entries " ;
        const connecton = sql.createConnection({
            host: 'localhost',
            user: 'newuser',
            password: 'Pa$$w0rd123',
            database: 'entries',

        });

        connecton.connect(function (er) {
            if (er) throw er;
            connecton.query(q, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        });
    }
    res.end('la');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
