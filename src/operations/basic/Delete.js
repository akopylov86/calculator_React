import Operation from "../Operation";

class Delete extends Operation{
    constructor() {
        super("<-");
        this.countNow = false;
        this.result = 0;
    }
    count(state) {
        this.result = Number(state.num1) - Number(state.num2)
        return(this.result);
    }


}

export default Delete