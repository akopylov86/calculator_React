import  React from 'react';
import './App.css';
import ResultLine from "./comopnents/ResultLine";
import Numbers from "./comopnents/numbers/Numbers";
import Operators from "./comopnents/operators/Operators";
import Calculator from "./calculator/Calculator";

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {res:"", defaultValue:"", formula:[]};
      this.objCalculator = new Calculator();
      this.addNum = this.addNum.bind(this);
      this.handleOperator = this.handleOperator.bind(this);
  }

  handleOperator(operator){
      this.objCalculator.addNumber(this.state.res);
      const answer = this.objCalculator.handleOperation(operator);
      this.setState({res: "", defaultValue: answer.result, formula: answer.formula})


  }

  addNum(num){
      const res = this.state.res;
      if (num !== "." || res.lastIndexOf(".") < 0){
          this.setState({res: res +num})
      }
  }


  render() {return (
    <div className="App">
      <div className="result_container">
          <ResultLine value={this.state.res}
                      defaultValue={this.state.defaultValue}
                      formulaArr={this.state.formula}
          />
      </div>
      <div className="buttons">
          <div className="nums_extended_operators">
              <Operators handleOperator={this.handleOperator}
                         type="extended"/>
              <Numbers addNumber={this.addNum}/>

          </div>

          <Operators handleOperator={this.handleOperator}
                     type="basic"/>
      </div>
    </div>
  );
}}

export default App;
