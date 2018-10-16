var express = require('express');
var app = express();
var path = require('path')
var mysql = require('mysql')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'));



app.get('/donors', function(req, res, next) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        database: 'lifeline',
    })    
    connection.connect();
    connection.query('SELECT * from donors', function (error, results, fields) {
        if (error) throw error.message;
        console.log('The solution is: ', results);
        res.render("donors", {
            data: results,
        })
    });
    connection.end();
})




app.listen(9090)