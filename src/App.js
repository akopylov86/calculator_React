import  React from 'react';
import './App.css';
import ResultLine from "./comopnents/ResultLine";
import Numbers from "./comopnents/numbers/Numbers";
import Operators from "./comopnents/operators/Operators";
import Calculator from "./calculator/Calculator";

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {res:"", defaultValue:""};
      this.objCalculator = new Calculator();
      this.addNum = this.addNum.bind(this);
      this.handleOperator = this.handleOperator.bind(this);
  }

  handleOperator(operator){
      this.objCalculator.addNumber(this.state.res);
      const answer = this.objCalculator.handleOperation(operator);

      console.log("answer", answer)
      this.setState({res: "", defaultValue: answer.result})


  }

  addNum(num){
      const res = this.state.res;
      if (num !== "." || res.lastIndexOf(".") < 0){
          // let updatedObj = {};
          // updatedObj[this.state.numToFill] = this.state[this.state.numToFill] + num
          this.setState({res: res +num})
      }
  }


  render() {return (
    <div className="App">
      <div className="result">
          <ResultLine value={this.state.res}
                       defaultValue={this.state.defaultValue}
                       //formulaLine={this.state.formulaLine}
          />
      </div>
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
