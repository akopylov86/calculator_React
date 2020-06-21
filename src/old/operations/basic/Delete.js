import Operation from "../Operation";

class Delete extends Operation{
    constructor() {
        super("<-");
        this.countNow = true;
        this.result = 0;
    }
    count(state) {
        let res = {};
        let numToFill = state.numToFill
        let value = state[numToFill]
        if (value) {
            value = value.substring(0, value.length - 1);
            res[numToFill] = value;
        }
        console.log("delete res", res, state[numToFill])
        return res
    }


}

export default Delete