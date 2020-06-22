import Operation from "../Operation";
import {X2} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class x2 extends Operation{
    constructor() {
        super(X2);
        this.countNow = true;
        this.result = 0;
        this.formulaValue = "";
    }

    count({result, input, inputFormula}) {
        doLog("X2", result, input, inputFormula)
        input = Number(input ?? result);
        this.result = Math.pow(input, 2);
        this.formulaValue = this.doFormulaLine(inputFormula || input);
        return this.basicAnswer(this.result, this.doFormulaLine(inputFormula || input));
    }

    doFormulaLine(i=undefined){
        if (i === undefined)
            return `(${this.formulaValue})²`
        else
            return `(${i})²`
    }
}

export default x2