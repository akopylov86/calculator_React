import Operation from "../Operation";

class Minus extends Operation{
    constructor() {
        super("-");
        this.countNow = false;
        this.result = 0;
    }
    count(state) {
        this.result = Number(state.num1) - Number(state.num2)
        return {num1: this.result.toString(), num2: "", operation: null}
    }


}

export default Minus