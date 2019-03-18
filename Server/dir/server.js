"use strict";
exports.__esModule = true;
var express = require("express");
var test_1 = require("./Routes/test");
var Server = (function () {
    function Server() {
        this.port = process.env.PORT || 3001;
        this.app = express();
        this.config();
        this.routes();
        this.listen();
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.api = function () {
    };
    Server.prototype.config = function () {
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Listening on port " + _this.port);
        });
    };
    Server.prototype.routes = function () {
        this.app.use('/', test_1.testRoute);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map