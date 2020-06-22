import Operation from "../Operation";
import {REVERSE} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Reverse extends Operation{
    constructor() {
        super(REVERSE);
        this.countNow = true;
        this.result = 0;
    }
    count({result, input}) {
        doLog("Reverse", result, input)
        input = Number(input ?? result);
        this.result = -1 * input;
        return this.basicAnswer(this.result);
    }
}

export default Reverse