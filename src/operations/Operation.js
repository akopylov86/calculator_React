class Operation {
    constructor(sign) {
        this.sign = sign;
        this.countNow = false;
        this.result = 0;
        this.formulaValue = 0;
    }

    count(state, resultState){
        throw new Error(`method Count should be implemented in ${typeof this}` )
    };

    formulaLine() {
        return this.sign
    }

    handleClick(state){
        return state
    }

}
export default Operation
