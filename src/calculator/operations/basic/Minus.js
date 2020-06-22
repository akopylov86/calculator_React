import Operation from "../Operation";
import {MINUS} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Minus extends Operation{
    constructor() {
        super(MINUS);
        this.countNow = false;
        this.result = 0
        this.formulaValue = this.sign;
    }
    count({result, input, inputFormula}) {
        this.result = Number(result) - Number(input);
        doLog("Minus = ", this.result)
        this.formulaValue = this.doFormulaLine(inputFormula ? "" : input);
        this.counted = true;
        return this.basicAnswer(this.result);
    }

    doFormulaLine(f1){
        return this.formulaValue + ` ${f1}`
    }

}

export default Minus