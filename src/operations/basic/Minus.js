import Operation from "../Operation";

class Minus extends Operation{
    constructor() {
        super("-");
        this.countNow = false;
        this.result = 0;
    }
    count(state, resultState) {
        this.result = Number(state.num1) - Number(state.num2)
        Object.assign(resultState,{num1: this.result.toString(), num2: "", operation: null})
        //return(this.result);
    }


}

export default Minus