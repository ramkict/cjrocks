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


app.use('/vzrmservice', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,csp-attuid,pu_id,Authorization, content');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Redirecting to T3 ATG for all /oce request
    var url = 'http://52.66.203.39:8080/vzrmservice' + req.url;
    console.log(url);
    var r = null;
    console.log(req.method);
    if (req.method === 'OPTIONS') {

    } else if (req.method === 'POST') {
        r = request.post({ uri: url, json: req.body });
    } else {
        r = request(url);
    }
    if (req.method === 'OPTIONS') {
        res.send();
    } else {
        req.pipe(r).pipe(res);
    }

});

app.use('/vz', function (req, res) {
    console.log("Call Came here");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,pu_id,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Redirecting to T3 ATG for all /oce request
    var url = 'http://52.66.203.39:8080/vz' + req.url;
    console.log(url);
    var r = null;
    console.log(req.method);
    if (req.method === 'OPTIONS') {

    } else if (req.method === 'POST') {
        r = request.post({ uri: url, json: req.body });
    } else {
        r = request(url);
    }
    if (req.method === 'OPTIONS') {
        res.send();
    } else {
        req.pipe(r).pipe(res);
    }

});

app.get('/myemployees', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,csp-attuid');
    res.setHeader('Access-Control-Allow-Credentials', true);
    connection.query('select * from idat_prod_01.tbl_fm_1007_filter_master', (err, row, fields) => {
        res.send(row);
    })
    //res.send('Hello World');
});

var server = app.listen(2233, function () {
    console.log("Server Started...");
});

