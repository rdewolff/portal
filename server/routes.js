var express = require('express');

var router = express.Router();

router.post('/api/v1/item', function(req, res){
  var model = req.getModel();
  //...
  res.json(true);
});

router.post('/api/v1/add', function(req, res){

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  console.log(req);

  console.log('received data');

  console.dir(req.body);

  // send back reply
  res.json('meuh');


});

module.exports = router;
