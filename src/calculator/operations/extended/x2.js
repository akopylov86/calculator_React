import Operation from "../Operation";
import {X2} from "../../../consts/Buttons";

class x2 extends Operation{
    constructor() {
        super(X2);
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
        console.log("X2", result, input)
        this.result = Math.pow(Number(input ?? result), 2);
        return this.basicAnswer(this.result);
    }

    formulaLine(i=undefined){
        if (i === undefined)
            return `(${this.formulaValue})²`
        else
            return `(${i})²`
    }
}

export default x2