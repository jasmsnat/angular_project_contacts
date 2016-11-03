var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.get('/', function(req, res){
    res.redirect('/code/views/index.html');
});
app.listen(3000, function(req, res){
    console.log('listening to port 3000');
})