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
  }

  countRes(op){
      const operation = new op();
      const res = operation.count(this.state.num1, this.state.num2 );
      this.setState({num1: res.toString(), num2: "", operation: null})
  }

  addNum(num){
      if (num !== "." || this.state[this.state.numToFill].lastIndexOf(".")<0){
          let updatedObj = {};
          updatedObj[this.state.numToFill] = this.state[this.state.numToFill] + num
          console.log(updatedObj)
          this.setState(updatedObj, ()=>{
              console.log(this.state)})
      }

    // if (this.state.num1 && this.state.operation){
    //     if (num !== "." || this.state.num2.lastIndexOf(".")<0)
    //         this.setState({num2: this.state.num2 + num } )
    // }  else {
    //     if (num !== "." || this.state.num1.lastIndexOf(".")<0)
    //         this.setState({num1: this.state.num1 + num})
    // }
  }

  handleOperator(operator){
      if (operator.countNow){
          console.log("count now")
      }
      if (this.state.numToFill === "num1"){
          this.state.formulaLine.push(this.state.num1, new operator());
          this.setState({ operation: operator, numToFill: "num2"})

      }else{
          if(this.state.operation !== operator){
              // eslint-disable-next-line react/no-direct-mutation-state
              this.state.formulaLine[this.state.formulaLine.length-1] = new operator();
              this.setState({operation: operator,
                  formulaLine: this.state.formulaLine})
          }
          if(this.state.num2){
              this.state.formulaLine.push(this.state.num2, new operator());
              this.countRes(this.state.operation)
              this.setState({operation: operator});
          }
      }


  }

  render() {return (
    <div className="App">
      <div><ResultLine value={this.state.operation ? this.state.num2 : this.state.num1} formulaLine={this.state.formulaLine}/></div>
      <div><Operators handleOperator={this.handleOperator}/></div>
      <div><Numbers addNumber={this.addNum}/></div>
    </div>
  );
}}

export default App;
