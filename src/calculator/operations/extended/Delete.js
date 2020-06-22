import Operation from "../Operation";
import {DELETE} from "../../../consts/Buttons";

class Delete extends Operation{
    constructor() {
        super(DELETE);
        this.countNow = true;
        this.result = 0;
    }
    count({result, input}) {
        input = (input ?? result);
        this.result = input.substring(0, input.length - 1)
        return this.basicAnswer(this.result);
    }


}

export default Delete