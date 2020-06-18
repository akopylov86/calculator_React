import Operation from "./Operation";

class Minus extends Operation{
    constructor() {
        super("-");
        this.countNow = false;
    }

    count(a, b) {
        return(Number(a) - Number(b));
    }


}

export default Minus