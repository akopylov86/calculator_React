import Operation from "../Operation";
import {SQRT} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Sqrt extends Operation{
    constructor() {
        super(SQRT);
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

    count(result, input) {
        doLog("SQRT", result, input)
        this.result = Math.sqrt(Number(input ?? result));
        return this.basicAnswer(this.result);

    }


    formulaLine(i=undefined){
        if (i === undefined)
            return `√(${this.formulaValue})²`
        else
            return `√(${i})`
    }
}

export default Sqrt