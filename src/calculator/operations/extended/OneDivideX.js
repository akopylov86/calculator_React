import Operation from "../Operation";
import {doLog} from "../../Loging";

class OneDivideX extends Operation{
    constructor() {
        super(OneDivideX);
        this.countNow = true;
        this.result = 0;
        this.formulaValue = 0;
    }
    countFormula(fLine, index){
        index = index ?? fLine.length-1
        const lastOp = fLine[index]
        if(lastOp && lastOp.countNow){
            return this.countFormula(fLine, index-1)
        }
        return this.formulaLine(lastOp)
    }

    count({result, input, inputFormula}) {
        doLog("1/X", result, input)
        input = Number(input ?? result);
        this.result = 1 / input;
        return this.basicAnswer(this.result, this.formulaLine(inputFormula || input));
    }

    formulaLine(i=undefined){
        if (i === undefined)
            return `(1/${this.formulaValue})`
        else
            return `(1/${i})`
    }
}

export default OneDivideX