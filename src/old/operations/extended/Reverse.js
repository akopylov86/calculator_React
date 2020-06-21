import Operation from "../Operation";

class Reverse extends Operation{
    constructor() {
        super("+/-");
        this.countNow = true;
        this.result = 0;
    }
    count(state) {
        let res = {};
        let numToFill = state.numToFill
        let value = state[numToFill]
        if (value) {
            value = -1 * value;
            res[numToFill] = value;
        }
        return res
    }
}

export default Reverse