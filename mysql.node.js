// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'vchnoacovhst-03',
//     port: '3306',
//     user: 'imart_admin_user',
//     password: 'imart_ADMIN@123'
// })

var express = require('express');
var request = require('request');
var app = express();


// connection.connect(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected!");
//     }

// });


app.use('/nlc', function (req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Redirecting to T3 ATG for all /oce request
    var url = 'http://103.209.145.24:8098' + req.url;
    console.log(url);
    var r = null;
    console.log(req.method,req.body);
    if (req.method === 'POST') {
        r = request.post({ uri: url, json: req.body });
    } else if (req.method === 'PUT') {
        r = request.put({ uri: url, json: req.body });
    }
    else {
        r = request(url);
    }
    req.pipe(r).pipe(res);

});

var server = app.listen(2233, function () {
    console.log("Server Started...");
});

