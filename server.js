var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000);

app.get('/chute', function (req, res) {
  request('https://api.getchute.com/v2/albums/aus6kwrg/assets?per_page=20', function (error, response, body) {
    res.send(JSON.parse(body).data);
  });
});
