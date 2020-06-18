class Operation {
    constructor(sign) {
        this.sign = sign;
        this.countNow = false;
    }

    count(){
        throw new Error(`method Count should be implemented in ${typeof this}` )
    };

    formulaLine(a, b) {
        if(b)
            return (`${a} ${this.sign} ${b}`)
        else if(a)
            return (`${a} ${this.sign}`)
        else
            return ""
    }

}
export default Operation
