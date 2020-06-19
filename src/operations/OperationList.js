import Equal from "./basic/Equal";
import Plus from "./basic/Plus";
import Minus from "./basic/Minus";
import x2 from "./extended/x2";
import Clear from "./extended/Clear";
import Delete from "./basic/Delete";
import Reverse from "./extended/Reverse";
import Sqrt from "./extended/Sqrt";
import OneDivideX from "./extended/OneDivideX";


export default function operationList(){
    return({

        basic:[ Delete, Plus, Minus, Equal],
        extended: [Reverse, x2, Sqrt,  Clear, OneDivideX]
    })
}