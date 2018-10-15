var express = require('express');
var app = express();
var path = require('path')
var mysql = require('mysql')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'));

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'lifeline',
})

connection.connect();

connection.query('SELECT * from donors', function (error, results, fields) {
    if (error) throw error.message;
    console.log('The solution is: ', results);
  });
   
  connection.end();

app.get('/', function(req, res, next) {
    //res.sendFile(path.join(__dirname + "/views/donors.html"))
    res.render("donors")
})




app.listen(9090)