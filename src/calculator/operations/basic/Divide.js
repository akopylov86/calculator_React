import Operation from "../Operation";
import {DIVIDE} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Divide extends Operation{
    constructor() {
        super(DIVIDE);
        this.countNow = false;
        this.result = 0;
    }
    count(num1, num2) {
        this.result = Number(num1) / Number(num2);
        doLog("Divide = ", this.result)
        return this.basicAnswer(this.result);
    }

    doFormulaLine(f1, f2){
        return `${f1} / ${f2}`
    }

}

export default Divide