"use strict";
exports.__esModule = true;
var dalkak_1 = require("dalkak");
exports["default"] = new dalkak_1.Pack(new dalkak_1.Dict, "Sample", new dalkak_1.Dict({
    log: new dalkak_1.Block(new dalkak_1.Dict, "log", "(text) 찍기", function (param) { return console.log(param.text); }, new dalkak_1.Dict({
        text: dalkak_1.Literal.from("안녕")
    }))
}));
