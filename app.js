var express = require('express');
var app = express();
var path = require('path')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res, next) {
    //res.sendFile(path.join(__dirname + "/views/donors.html"))
    res.render("donors")
})




app.listen(9090)