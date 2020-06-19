import Operation from "../Operation";

class x2 extends Operation{
    constructor() {
        super("x²");
        this.countNow = true;
        this.result = 0;
        this.formulaValue = 0;
    }
    // countFormula(fLine, index){
    //     index = index ?? fLine.length-1
    //     const lastOp = fLine[index ?? fLine.length-1]
    //     if(lastOp && lastOp.countNow){
    //        return this.countFormula(fLine, index-1)
    //     }
    //     return
    // }

    count(state) {
        const a = state[state.numToFill];
        this.result = Math.pow(Number(a), 2);
        this.formulaValue = a;//this.countFormula(state.formulaLine);
        return(this.result);
    }

    formulaLine(){
        return `(${this.formulaValue})²`
    }
}

export default x2