import {OperationList} from "./operations/OperationList";
import {doLog} from "./Loging";

class Calculator {
    constructor() {
        this.result = this.input = null;
        this.formulaLineAll = [];
        this.currFormula = "";
        this.currOperation = null;
    }

    //Core methods
    handleOperation(op){
        let answer = {};
        const operatorObj = new OperationList[op]();

        if(operatorObj.countNow){
            answer = this.countResult(operatorObj);
            this.currFormula = answer.formula;
            this.input = answer.result;
            this.checkItsFirstInput();

        }else {
            if (this.currOperation && this.input) {
                answer = this.countResult(this.currOperation);
                this.result = answer.result
            }
            this.checkItsFirstInput()

            this.currOperation = operatorObj;
            answer.result = this.result
            this.input = null;
        }

        if(this.checkItsClear(answer)) return answer;
        this.handleFormula(answer, operatorObj)
        return answer
    }

    addNumber(num){
        if (num) {
            this.input = num;
            if(!this.result) {
                this.formulaLineAll.push(num);
            }
        }
    }

    countResult(operatorObj){
        return operatorObj.count({result:this.result,
                                  input:this.input,
                                  currOperation:this.currOperation,
                                  inputFormula: this.currFormula});
    }

    //Service methods
    checkItsFirstInput(){
        if (!this.result && this.input) {
            console.log("reset input!!")
            this.result = this.input;
            this.input = null;
        }
    }

    checkItsClear(answer){
        const itsClear = (answer.params && answer.params.clear)
        if(itsClear){
            doLog("is clear!")
            this.result = this.input = null;
            this.formulaLineAll = [];
            this.currFormula = "";
            this.currOperation = null;
        }
        return itsClear
    }

    handleFormula(answer, operator){
        const formulaLineAll = this.formulaLineAll;
        const lastOperation = formulaLineAll[formulaLineAll.length - 1];

        this.currFormula = answer.formula;
        this.addToFormula(operator, formulaLineAll, lastOperation);
        answer.formula = this.formulaLineAll;
    }

    addToFormula(operator, formulaLineAll, lastOperation){
        if(operator.countNow) {
            if((lastOperation && lastOperation.countNow) || !isNaN(lastOperation)){
                console.log("op !cur", operator)
                formulaLineAll.splice((formulaLineAll.length-1), 1, operator );
            }else{
                console.log("op cur")
                this.formulaLineAll.push(operator);
            }
        }else{
            if(lastOperation.countNow || !isNaN(lastOperation)  || lastOperation.counted ){
                console.log("!op cur")
                this.formulaLineAll.push(operator);
            }else {
                console.log("!op !cur", this.input, lastOperation)
                formulaLineAll.splice((formulaLineAll.length-1), 1, operator )
            }
        }
    }
}

export default Calculator