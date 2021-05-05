"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var react_1 = require("react");
var server_1 = require("react-dom/server");
var Email_1 = __importDefault(require("./components/Email"));
var app = express_1.default();
app.get('/', function (req, res) {
    var emailTemplate = server_1.renderToString(react_1.createElement(Email_1.default));
    console.log(emailTemplate);
    return res.send(emailTemplate);
});
var port = 3000;
app.listen(port, function () { console.log('server started: http://localhost:3000'); });
