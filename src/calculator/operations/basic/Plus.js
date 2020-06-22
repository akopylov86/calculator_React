import Operation from "../Operation";
import {PLUS} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Plus extends Operation{
    constructor() {
        super(PLUS);
        this.countNow = false;
        this.result = 0;
        this.formulaValue = this.sign;
    }
    count({result, input, inputFormula}) {
        this.result = Number(result) + Number(input);
        this.formulaValue = this.doFormulaLine(inputFormula ? "" : input);
        this.counted = true;
        doLog("Plus = ", this.result, inputFormula, input)
        return this.basicAnswer(this.result);
    }

    doFormulaLine(f1){
        return this.formulaValue + ` ${f1}`
    }

}

export default Plus