import Operation from "../Operation";

class Clear extends Operation{
    constructor() {
        super("C");
        this.countNow = true;
        this.result = 0;
    }
    count(state) {
        return {num1: "", num2: "", numToFill: "num1", operation: null, lastOperation: null, formulaLine: []}
    }


}

export default Clear