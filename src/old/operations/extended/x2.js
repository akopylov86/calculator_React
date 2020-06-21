import Operation from "../Operation";

class x2 extends Operation{
    constructor() {
        super("x²");
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
        this.result = Math.pow(Number(a), 2);
        this.formulaValue = a;
        console.log(this.countFormula(state.formulaLine))
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

export default x2