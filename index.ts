import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack(
    new Dict, 
    "Sample",
    new Dict({
        log: new Block(
            new Dict, 
            "log",
            "(text) 찍기",
            param => console.log(param.text),
            new Dict({
                text: Literal.from("안녕")
            })
        )
    })
);