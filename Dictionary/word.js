module.exports.wordFilter = function (par) {
    
    const sql = require('mysql');
    
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
            // console.log(result); 
            // console.log('reached this point');
        });
    });
}