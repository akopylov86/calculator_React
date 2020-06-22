import Operation from "../Operation";
import {EQUAL} from "../../../consts/Buttons";
import {doLog} from "../../Loging";

class Equal extends Operation{
    constructor() {
        super(EQUAL);
        this.countNow = true;
        this.result = 0;
        this.formulaValue = this.sign;
    }

    count({result, input, currOperation, inputFormula}) {
        doLog("Starting Equal = ", result, input,currOperation,  inputFormula);
        let answer;
        if(currOperation) {
            answer = currOperation.count({result, input, inputFormula});
        }else {
            answer = this.basicAnswer(result)
        }
        answer.params.end = true;
        this.result = answer.result;
        this.formulaValue = this.doFormulaLine(inputFormula);
        doLog("Equal = ", answer);
        return answer;
    }

    doFormulaLine(inputFormula=""){
        return inputFormula + ` = ${this.result}`
    }

}

export default Equal