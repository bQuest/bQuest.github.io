const express = require('express');
const path = require('path');
// var wrd = require('./word.js');
var bodyParser = require("body-parser");

const app = express();

//load public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'public', 'dict.html'));    
});

app.post('/', (req, res) => {    

    const sql = require('mysql');

    var par = req.body.word;
    var q = "SELECT wordtype, definition FROM entries.entries WHERE word LIKE " + sql.escape(par);
    
    console.log(`q: ${q}`);

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
            //  res.json(result);
            res.send(JSON.stringify(result));
        });
    });




    // console.log('you reached here');
    // var par = req.body.word;
    // var words = wrd.wordFilter(par);
    // console.log('here now');
    // console.log(JSON.stringify(words));
    // // res.send(words);
    // res.json(words);
    // // res.send(JSON.stringify(words));
    // console.log('tried that');
    // res.end();
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
