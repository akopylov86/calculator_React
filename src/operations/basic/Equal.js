import Operation from "../Operation";

class Equal extends Operation{
    constructor() {
        super("=");
        this.countNow = true;
        this.result = 0;
        this.formulaValue = 0;
    }

    count(state) {
        state.formulaLine.push(state[state.numToFill], this );

        let countRes = state.operation.count(state);
        this.result = countRes.num1;
        this.formulaValue = (state.lastOperation && state.lastOperation.countNow)
            ? [this.result, ""]
            : [this.result, state.num2];

        console.log("countRes", countRes, "state", state)
        return countRes;
    }

    formulaLine(state, operation){
        return `${this.formulaValue[1]} = ${this.formulaValue[0]}`
    }

}

export default Equal