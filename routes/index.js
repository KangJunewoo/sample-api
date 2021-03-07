const express = require('express');
const router = express.Router();
const util = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');

router.get('/', (req, res) => {
    return res.status(sc.OK).send(util.success(sc.OK, rm.OK, 'GET 요청 성공'));
});

router.post('/', (req, res) => {
    return res
        .status(sc.OK)
        .send(util.success(sc.OK, rm.OK, `POST 요청 성공 : ${req.body.data}`));
});

module.exports = router;
