import * as Buttons from "../../consts/Buttons"
import Equal from "./basic/Equal";
import Plus from "./basic/Plus";
import Minus from "./basic/Minus";
import x2 from "./extended/x2";
import Clear from "./extended/Clear";
import Delete from "./extended/Delete";
import Reverse from "./extended/Reverse";
import Sqrt from "./extended/Sqrt";
import OneDivideX from "./extended/OneDivideX";
import Multiple from "./basic/Mupliple";
import Divide from "./basic/Divide";


export const OperationList = {
    [Buttons.PLUS] : Plus,
    [Buttons.MINUS] : Minus,
    [Buttons.MULTIPLE] : Multiple,
    [Buttons.DIVIDE] : Divide,
    [Buttons.EQUAL] : Equal,
    [Buttons.SQRT] : Sqrt,
    [Buttons.X2] : x2,
    [Buttons.CLEAR]: Clear,
    [Buttons.DELETE]: Delete,
    [Buttons.REVERSE]: Reverse,
}