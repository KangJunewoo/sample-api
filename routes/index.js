const express = require('express');
const router = express.Router();
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/desktop', (req,res)=>{
  data = {}
  for(let i=0;i<20;i++){
    data[i] = 'http://placeimg.com/1024/576';
  }
  res.status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.OK, data));
});

router.get('/mobile', (req,res)=>{
  data = {}
  for(let i=0;i<20;i++){
    data[i] = 'http://placeimg.com/360/640';
  }
  res.status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.OK, data));
});

module.exports = router;
