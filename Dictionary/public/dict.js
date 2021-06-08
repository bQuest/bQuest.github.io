const sql = require('mysql');

const connecton = sql.createConnection({
    host: 'localhost',
   // port: 3306,
    user: 'newuser',
    password: 'Pa$$w0rd123',
    database: 'entries',
    
});

connecton.connect(function(er){
    if(er) throw er;
    connecton.query("select count(*) from entries", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});