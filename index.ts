import {
    Pack, Block, Literal, Type
} from "dalkak";

export default new Pack(
    "Sample",
    {
        log: new Block(
            "log",
            "(text) 찍기",
            param => console.log(param.text),
            {
                text: (()=>{var l = new Literal(Type.typeof("string"));l.setParam("value", "안녕");return l})()
            }
        )
    }
);