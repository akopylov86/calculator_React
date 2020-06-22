import Operation from "../Operation";
import {PERCENT} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Percent extends Operation{
    constructor() {
        super(PERCENT);
        this.countNow = true;
        this.result = 0;
        this.formulaValue = "";
    }

    count({result, input, inputFormula}) {
        doLog("Handling", PERCENT, result, input, inputFormula);
        if(!input){
            input = result;
            result = 1;
        }
        this.result = (result/100)*input;
        this.formulaValue = this.doFormulaLine(inputFormula || input);
        this.counted = true;
        return this.basicAnswer(this.result, this.doFormulaLine(inputFormula || input));
    }

    doFormulaLine(i=undefined){
        if (i === undefined)
            return `${this.result}%`
        else
            return `${i}%`
    }
}

export default Percent