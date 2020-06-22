import Operation from "../Operation";
import {CLEAR} from "../../../consts/Buttons";

class Clear extends Operation{
    constructor() {
        super(CLEAR);
        this.countNow = true;
        this.result = 0;
    }
    count() {
        return {result:"", formula: [], params: {clear:true}}
    }


}

export default Clear