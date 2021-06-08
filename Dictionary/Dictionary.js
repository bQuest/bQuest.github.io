const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send(`dirname: ${__dirname} <br> filename: ${__filename}`);
});

//load public folder
// app.use(express.static(path.join(__dirname), ''));

//body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));