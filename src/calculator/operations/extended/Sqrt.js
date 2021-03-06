import Operation from "../Operation";
import {SQRT} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Sqrt extends Operation{
    constructor() {
        super(SQRT);
        this.countNow = true;
        this.result = 0;
        this.formulaValue = "";
    }

    count({result, input, inputFormula}) {
        doLog("SQRT", result, input)
        input = Number(input ?? result);
        this.result = Math.sqrt(Number(input));
        this.formulaValue = this.doFormulaLine(inputFormula || input);
        return this.basicAnswer(this.result, this.doFormulaLine(inputFormula || input));
    }

    doFormulaLine(i=undefined){
        if (i === undefined)
            return `√(${this.formulaValue})²`
        else
            return `√(${i})`
    }
}

export default Sqrt