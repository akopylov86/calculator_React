import Operation from "../Operation";
import {MINUS} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Plus extends Operation{
    constructor() {
        super(MINUS);
        this.countNow = false;
        this.result = 0;
    }
    count(num1, num2) {
        this.result = Number(num1) - Number(num2);
        doLog("Minus = ", this.result)
        return this.basicAnswer(this.result);
    }

    doFormulaLine(f1, f2){
        return `${f1} - ${f2}`
    }

}

export default Plus