var http = require('http');
var express = require('express');
var app = express();
var Promise = require('es6-promise').Promise;
var cors = require('express-cors');

app.use(cors({
  allowedOrigins: [
    'http://localhost:8100'
  ]
}));

var options = {
  host: 'http://docker',
  port: 9000,
  path: '/ws/svalues/bySensorId/1'
};

function httpGet (options) {
  return new Promise(function (resolve, reject) {
    http.get(options, function (res) {
      res.on('data', function (data) {
        resolve(data.toString());
      })
      .on('error', function (e) {
        reject(e.message);
      });
    });
  });
}

var mapResponse = [{
  "id": 1,
  "data": 21,
  "messDate": "2016-12-01 21:46:28.233"
},
  {
    "id": 2,
    "data": 27,
    "messDate": "2016-12-01 21:51:48.086"
  },
  {
    "id": 3,
    "data": 24,
    "messDate": "2015-12-01 21:51:48.086"
  },
  {
    "id": 4,
    "data": 33,
    "messDate": "2014-12-01 21:51:48.086"
  }];

app.get('/', function (req, res) {

  //httpGet(options)
  //  .then(
  //  response => {
  //    console.log(`Fulfilled: ${response}`);
  //    res.send(response);
  //},
  //  error => {
  //    console.log(`Rejected: ${error}`);
      res.send(mapResponse);
  //  }
  //);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
