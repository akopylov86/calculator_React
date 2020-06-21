import {ButtonsUIConst} from "../../consts/ButtonsUIConst";

class Operation {
    constructor(button) {
        this.sign = ButtonsUIConst[button];
        this.countNow = false;
        this.result = 0;
        this.formulaValue = 0;
    }

    count(){
        throw new Error(`method Count should be implemented in ${typeof this}` )

    };

    basicAnswer(countRes){
        return {result: countRes, params:{end:false, clear:false}}
    }

    doFormulaLine() {
        throw new Error(`method doFormulaLine should be implemented in ${typeof this}` )
    }
}
export default Operation
