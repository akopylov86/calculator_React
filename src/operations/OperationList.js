import Equal from "./basic/Equal";
import Plus from "./basic/Plus";
import Minus from "./basic/Minus";
import x2 from "./extended/x2";


export default function operationList(){
    return({
        basic:[ Plus, Minus, Equal],
        extended: [x2]
    })
}