import  React from 'react';
import './App.css';
import ResultLine from "./old/components/ResultLine";
import Numbers from "./old/components/numbers/Numbers";
import Operators from "./old/components/operators/Operators";

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {num1: "", num2: "", numToFill: "num1", operation: null, formulaLine: []}
      this.countRes = this.countRes.bind(this)
      this.addNum = this.addNum.bind(this)
      this.handleOperator = this.handleOperator.bind(this)
      this.currLineIsInt = this.currLineIsInt.bind(this)
  }

  currLineIsInt(){
    return this.state[this.state.numToFill].lastIndexOf(".") < 0
  }

  countRes(operation){
      const res = operation.count(this.state);
      //this.setState({num1: res.toString(), num2: "", operation: null})
      this.setState(res)
  }

  addNum(num){
      if (num !== "." || this.currLineIsInt()){
          let updatedObj = {};
          updatedObj[this.state.numToFill] = this.state[this.state.numToFill] + num
          this.setState(updatedObj)
      }
  }

  handleOperator(operator){
      const formulaLine = this.state.formulaLine;
      const lastOperation = this.state.lastOperation;
      const numToFill = this.state.numToFill;
      const operation = this.state.operation;

      // let newState = operator.handleClick(this.state)
      // this.setState(newState)

      if (operator.countNow){
          // this.countCurr(operator)
          this.countRes(operator)
      }else {
            if(numToFill === "num2"){
                if(this.state.num2){
                    this.countRes(this.state.operation);
                    (!!lastOperation && lastOperation.countNow)
                        ? formulaLine.push( operator )
                        : formulaLine.push(this.state.num2, operator );
                }else if(operation && operation !== operator) {
                    formulaLine[formulaLine.length - 1] = operator;
                }
                this.setState({operation: operator, lastOperation: operator, formulaLine});

            }else{
                if(operation && operation !== operator)
                    formulaLine[formulaLine.length - 1] = operator;
                else if(lastOperation)
                    formulaLine.push(operator);
                else
                    formulaLine.push(this.state.num1, operator );
                this.setState({operation: operator, lastOperation: operator, numToFill: "num2", formulaLine});
            }
      }
      console.log("operator", operator, this.state)
  }

  render() {return (
    <div className="App">
      <div className="result"><ResultLine value={this.state[this.state.numToFill]}
                       defaultValue={this.state.num1}
                       formulaLine={this.state.formulaLine}/></div>
      <Operators handleOperator={this.handleOperator}
                     type="extended"/>
      <div className="nums_basic_operators">
          <Numbers addNumber={this.addNum}/>
          <Operators handleOperator={this.handleOperator}
                          type="basic"/>
      </div>

    </div>
  );
}}

export default App;
