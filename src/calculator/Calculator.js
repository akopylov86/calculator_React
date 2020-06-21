import {OperationList} from "./operations/OperationList";
import {doLog} from "./Loging";

class Calculator {
    constructor() {
        this.result = this.input = null;
        this.formulaLineHist = [];
        this.currFormula = [];
        this.currOperation = null;
    }

    //Core methods
    handleOperation(op){
        let answer = {};

        console.log("start handle ", op, this.result, this.input)
        const operatorObj = new OperationList[op]();

        if(operatorObj.countNow){
            answer = this.countResult(operatorObj);
            this.input = answer.result;
            // console.log("countNow", this.result, this.input)
        }else {
            if (this.currOperation && this.input) {
                // console.log("count_in_AddOp")
                answer = this.countResult(this.currOperation);
                this.result = answer.result
                this.input = null;
            }
            this.checkItsFirstInput()

            this.currOperation = operatorObj;
            answer.result = this.result
        }
        this.checkItsFirstInput()

        doLog("Prepared answer", answer)
        this.checkItsEnd(answer)
        return answer
    }

    addNumber(num){
        console.log("Adding num", num)
        if (num) {
            this.input = num;

            this.currFormula.push(num)
        }
    }

    countResult(operatorObj){
        return operatorObj.count(this.result, this.input, this.currOperation);
    }

    //Service methods
    checkItsFirstInput(){
        if (!this.result && this.input) {
            console.log("reset input!!")
            this.result = this.input;
            this.input = null;
        }
    }

    checkItsEnd(answer){
        if(answer.params && answer.params.end){
            this.result = this.input = null;
            this.formulaLineHist = [];
            this.currFormula = [];
            this.currOperation = null;
        }

    }
}

export default Calculator