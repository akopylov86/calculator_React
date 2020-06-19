import Operation from "../Operation";

class Plus extends Operation{
    constructor() {
        super("+");
        this.countNow = false;
        this.result = 0;
        this.count = this.count.bind(this)
    }
    count(state) {
        this.result = Number(state.num1) + Number(state.num2);
        return {num1: this.result.toString(), num2: "", operation: null}
    }

    // handleClick(state){
    //     let resultState = {}
    //     let formulaLine = state.formulaLine;
    //          if(state.numToFill === "num2"){
    //             if(state.num2){
    //                 //!!!!!!!!!!!!!countRes(this.state.operation);
    //                 console.log(typeof this.count)
    //                 resultState = this.count(state, resultState)
    //                 (!!state.lastOperation && state.lastOperation.countNow)
    //                     ? formulaLine.push( this )
    //                     : formulaLine.push(state.num2, this );
    //             }else if(state.operation && state.operation.__proto__ !== this) {
    //                 formulaLine[formulaLine.length - 1] = this;
    //             }
    //             //this.setState({operation: operator, lastOperation: operator, formulaLine});
    //             resultState.operation = this;
    //             resultState.lastOperation = this;
    //             resultState.formulaLine = formulaLine;
    //
    //         }else{
    //             if(state.operation && state.operation !== this)
    //                 formulaLine[formulaLine.length - 1] = this;
    //             else if(state.lastOperation)
    //                 formulaLine.push(this);
    //             else
    //                 formulaLine.push(state.num1, this );
    //             //this.setState({operation: operator, lastOperation: operator, numToFill: "num2", formulaLine});
    //             resultState.operation = this;
    //             resultState.lastOperation = this;
    //             resultState.numToFill = "num2";
    //             resultState.formulaLine = formulaLine;
    //         }
    //     return resultState
    // }

}

export default Plus