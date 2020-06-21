import Operation from "../Operation";
import {EQUAL} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Equal extends Operation{
    constructor() {
        super(EQUAL);
        this.countNow = false;
        this.result = 0;
        this.formulaValue = 0;
    }

    count(result, input, currOperation) {

         let countRes = currOperation.count(result, input, currOperation);

        doLog("Equal = ", countRes, result, input, currOperation);
        const answer = this.basicAnswer(countRes);
        answer.params.end = true;
         return answer;

    }

    formulaLine(state, operation){
        return `${this.formulaValue[1]} = ${this.formulaValue[0]}`
    }

}

export default Equal