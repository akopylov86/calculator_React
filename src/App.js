import  React from 'react';
import './App.css';
import ResultLine from "./components/ResultLine";
import Numbers from "./components/numbers/Numbers";
import Operators from "./components/operators/Operators";

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {num1: "", num2: "", numToFill: "num1", operation: null, formulaLine: []}
      this.countRes = this.countRes.bind(this)
      this.addNum = this.addNum.bind(this)
      this.handleOperator = this.handleOperator.bind(this)
      this.countCurr = this.countCurr.bind(this)
      this.clearAll = this.clearAll.bind(this)
      this.currLineIsInt = this.currLineIsInt.bind(this)
  }

  currLineIsInt(){
    return this.state[this.state.numToFill].lastIndexOf(".") < 0
  }

  clearAll(){
      this.setState({num1: "", num2: "", numToFill: "num1", operation: null, lastOperation: null, formulaLine: []})
  }

  countRes(operation){
      const res = operation.count(this.state);
      this.setState({num1: res.toString(), num2: "", operation: null})
  }

  countCurr(operation){
      const state = this.state;
      const res = operation.count(state);
      let updatedObj = {lastOperation: operation};
      updatedObj[state.numToFill] = res ;
      this.state.formulaLine.push(state[state.numToFill], operation );
      this.setState(updatedObj);
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
      console.log("operator", operator)
      let newState = operator.handleClick(this.state)
      this.setState(newState)

      // if (operator.countNow){
      //     this.countCurr(operator)
      // }else {
      //       if(numToFill === "num2"){
      //           if(this.state.num2){
      //               this.countRes(this.state.operation);
      //               (!!lastOperation && lastOperation.countNow)
      //                   ? formulaLine.push( operator )
      //                   : formulaLine.push(this.state.num2, operator );
      //           }else if(operation && operation !== operator) {
      //               formulaLine[formulaLine.length - 1] = operator;
      //           }
      //           this.setState({operation: operator, lastOperation: operator, formulaLine});
      //
      //       }else{
      //           if(operation && operation !== operator)
      //               formulaLine[formulaLine.length - 1] = operator;
      //           else if(lastOperation)
      //               formulaLine.push(operator);
      //           else
      //               formulaLine.push(this.state.num1, operator );
      //           this.setState({operation: operator, lastOperation: operator, numToFill: "num2", formulaLine});
      //       }
      // }
  }

  render() {return (
    <div className="App">
      <div><ResultLine value={this.state[this.state.numToFill]} defaultValue={this.state.num1} formulaLine={this.state.formulaLine}/></div>
      <div><Operators handleOperator={this.handleOperator} clearAll={this.clearAll}/></div>
      <div><Numbers addNumber={this.addNum}/></div>
    </div>
  );
}}

export default App;
