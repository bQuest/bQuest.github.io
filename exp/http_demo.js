const htp = require('http');
const pat = require('path');
const fs = require('fs');

const srv = htp.createServer((req, res) => {
    if(req.url === '/')
        res.end(req.url);
});

const PORT = process.env.PORT || 8090;

srv.listen(PORT, () => console.log(`server running on ${PORT}`));