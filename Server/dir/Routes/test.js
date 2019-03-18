"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
exports.testRoute = router
    .get('/', function (req, res) {
    res.send('test page!');
});
//# sourceMappingURL=test.js.map