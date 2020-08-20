var express = require('express');
var router = express.Router();

router.get('/report', function(req, res, next) {
    res.send('API is working properly: ' + req.query["reportId"]);
});

module.exports = router;