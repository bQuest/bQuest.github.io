const express = require('express');
const path = require('path');
var wrd = require('./word.js');
var bodyParser = require("body-parser");

const app = express();

// //set view engine
// app.set('view engine', 'jade');

// //load public folder
app.use(express.static(path.join(__dirname) + 'public'));

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    // res.render('./public/dict.html', {title: "Home page"});
    // res.sendFile('./dict.html');
    // res.send(`dirname: ${__dirname} <br> filename: ${__filename}`);
});

// app.post('/dict.html', (req, res) => {
//     var par = req.body.word;
//     res.render(wrd.filt());
// });

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
