import {ButtonsUIConst} from "../../consts/ButtonsUIConst";

class Operation {
    constructor(button) {
        this.sign = ButtonsUIConst[button];
        this.button = button;
        this.countNow = false;
        this.result = 0;
        this.formulaValue = "";
        this.counted = false;
    }

    count(){
        throw new Error(`method Count should be implemented in ${typeof this}` )

    };

    //No need to implement in child classes.
    basicAnswer(countRes, formula){
        return {result: countRes, formula:formula, params:{end:false, clear:false}}
    }

    doFormulaLine() {
        throw new Error(`method doFormulaLine should be implemented in ${typeof this}` )
    }
}
export default Operation
