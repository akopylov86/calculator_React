import Operation from "../Operation";
import {MULTIPLE} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Multiple extends Operation{
    constructor() {
        super(MULTIPLE);
        this.countNow = false;
        this.result = 0;
    }
    count(num1, num2) {
        this.result = Number(num1) * Number(num2);
        doLog("Multiple = ", this.result)
        return this.basicAnswer(this.result);
    }

    doFormulaLine(f1, f2){
        return `${f1} * ${f2}`
    }

}

export default Multiple