const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send(`dirname: ${__dirname} <br> filename: ${__filename}`);
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));