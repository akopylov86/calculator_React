import Operation from "../Operation";

class Equal extends Operation{
    constructor() {
        super("=");
        this.countNow = true;
        this.result = 0;
        this.formulaValue = 0;
    }

    count(state) {
        this.result = state.operation.count(state);
        this.formulaValue = (state.lastOperation && state.lastOperation.countNow)
            ? [this.result, ""]
            : [this.result, state.num2];
        return this.result;
    }

    formulaLine(state, operation){
        return `${this.formulaValue[1]} = ${this.formulaValue[0]}`
    }

}

export default Equal