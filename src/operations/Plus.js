import Operation from "./Operation";

class Plus extends Operation{
    constructor() {
        super("+");
        this.countNow = false;
    }

    count(a, b) {
        console.log("count+", Number(a) + Number(b))
        return(Number(a) + Number(b));
    }

}

export default Plus