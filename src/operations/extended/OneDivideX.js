import Operation from "../Operation";

class OneDivideX extends Operation{
    constructor() {
        super("1/x");
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

    count(state) {
        let resState = {lastOperation: this};
        let numToFill = state.numToFill
        const a = state[numToFill];
        this.result = 1/Number(a);
        this.formulaValue = a;
        resState[numToFill] = this.result;
        state.formulaLine.push(state[numToFill], this );
        return resState;
    }

    formulaLine(i=undefined){
        if (i === undefined)
            return `(${this.formulaValue})²`
        else
            return `(${i})²`
    }
}

export default OneDivideX