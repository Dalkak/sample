"use strict";
exports.__esModule = true;
var dalkak_1 = require("dalkak");
exports["default"] = new dalkak_1.Pack("Sample", {
    log: new dalkak_1.Block("log", "(text) 찍기", function (param) { return console.log(param.text); }, {
        text: (function () { var l = new dalkak_1.Literal(dalkak_1.Type["typeof"]("string")); l.setParam("value", "안녕"); return l; })()
    })
});
