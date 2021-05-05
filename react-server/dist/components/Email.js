"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Template = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("body", null,
        react_1.default.createElement("table", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("td", null, children)))));
};
var Email = function () {
    return (react_1.default.createElement("table", null,
        react_1.default.createElement("tr", null,
            react_1.default.createElement("td", null, "Hello table")),
        react_1.default.createElement("tr", null,
            react_1.default.createElement("td", null, "It works!!"))));
};
exports.default = (function () { return react_1.default.createElement(Template, null,
    react_1.default.createElement(Email, null)); });
