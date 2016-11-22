var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var basePath = "/service";
var app = express();

app.use(bodyParser.json()); //supports json-encoded bodies
app.use(bodyParser.urlencoded({ //supprots url-encoded bodies
    extended: true
}));

app.use(connection(mysql, { //create sql connection
    host: 'localhost',
    user: 'personuser2',
    password: '12345',
    database: 'personrepository'
}, 'request'));

var getPostObj = { //add
    person: {
        url: basePath + "/person",
        ids: [],
        query: "INSERT INTO personinfo SET ?"
    }
}

var getPutObj = { //edit
    person: {
        url: basePath + "/person/:personid",
        ids: ["personid"],
        query: "UPDATE personinfo SET ? WHERE personinfoid = ?"
    }
}

var getGetObj = { //retrieve
    person: {
        url: basePath + "/person",
        ids: [],
        query: "SELECT * FROM personinfo"
    },
    personId: {
        url: basePath + "/person/:personid",
        ids: ["personid"],
        query: "SELECT * FROM personinfo WHERE personinfoid = ?"
    }
}

var getDeleteObj = { //delete
    personId: {
        url: basePath + "/person/:personid",
        ids: ["personid"],
        query: "DELETE FROM personinfo WHERE personinfoid = ?"
    }
}

for(var key in getPostObj) {
    postServices(getPostObj[key].url, getPostObj[key].ids, getPostObj[key].query);
}

for(var key in getPutObj) {
    putServices(getPutObj[key].url, getPutObj[key].ids, getPutObj[key].query);
}

for(var key in getGetObj) {
    getServices(getGetObj[key].url, getGetObj[key].ids, getGetObj[key].query);
}

for(var key in getDeleteObj) {
    deleteServices(getDeleteObj[key].url, getDeleteObj[key].ids, getDeleteObj[key].query);
}

function postServices(url, ids, query) {
    app.post(url, function(req, res, next) {
        var reqObj = req.body;
        req.getConnection(function(err, connection) {
            if(err) {
                return next(err);
            }
            connection.query(query, reqObj, function(err, results) {
                if(err) {
                    console.log(err);
                    return next("Mysql error, check POST query");
                }
                res.json(results);
            });
        });
    });
}

function putServices(url, ids, query) {
    app.put(url, function(req, res, next) {
        var id = req.params[ids];
        var reqObj = req.body;
        req.getConnection(function(err, connection) {
            if(err) {
                return next(err);
            }
            connection.query(query, [reqObj, id], function(err, results) {
                if(err) {
                    console.log(err);
                    return next("Mysql error, check PUT query");
                }
                res.json(results);
            });
        });
    });
}

function getServices(url, ids, query) {
    app.get(url, function(req, res, next) {
        req.getConnection(function(err, connection) {
            if(err) {
                return next(err);
            }
            connection.query(query, req.params[ids], function(err, results) {
                if(err) {
                    console.log(err);
                    return next("Mysql error, check GET query");
                }
                res.json(results);
            });
        });
    });
}

function deleteServices(url, ids, query) {
    app.delete(url, function(req, res, next) {
        req.getConnection(function(err, connection) {
            if(err) {
                return next(err);
            }
            connection.query(query, req.params[ids], function(err, results) {
                if(err) {
                    console.log(err);
                    return next("Mysql error, check DELETE query");
                }
                res.json(results);
            });
        });
    });
}

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.redirect('/code/views/index.html');
});

app.listen(3000, function(req, res){
//    console.log('listening to port 3000');
});