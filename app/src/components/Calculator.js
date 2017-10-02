import React, { Component } from "react";
import calculatorImg from "./calculator.png";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      header: "My Calculator",
      display: "0",
      operator: "",
      tempNum: ""
    };
  }

  updateHeader(e) {
    var value = e.target.value;

    this.setState({
      header: value
    });
  }

  // updateDisplay(number) {
  //   var newDisplay = this.state.newDisplay
  //   if(this.state.display === 0) {
  //     this.state.display = number
  //   } else {
  //     this.state.display + number
  //   }
  //   //If statements right here to fix the display bugs!
  //   this.setState({
  //     displayNum: function(){
  //       this.stat
  //     }
  //   });
  // }

  updateDisplay(num) {
    var display = ( this.state.display === '0' ) ? num : this.state.display + num;
    this.setState({ display: (this.state.display.length < 13) ? display : this.state.display })
  }

  updateClear() {

    this.setState({
      display: "0",
      operator: "",
      tempNum: ""
    });
  }

  setOperator(operator) {
    if ( !this.state.operator ) {
      this.setState({ operator: operator, tempNum: parseInt(this.state.display, 10), display: '0' });
    }
  }

  updateOperation(){
      //moves displayNum to tempNUm
      //saves operator
      //blanks out displayNum
  }

  calculate(){
      //does if statement and math
      //updates displayNum
    
      var result;

      switch ( this.state.operator ) {
        case '+':
          result = this.state.tempNum + parseInt(this.state.display, 10);
          break;
        case '-':
          result = this.state.tempNum - parseInt(this.state.display, 10);
          break;
        case '*':
          result = this.state.tempNum * parseInt(this.state.display, 10);
          break;
        case '/':
          result = this.state.tempNum / parseInt(this.state.display, 10);
          break;
        default:
          break;
      }

      console.log(result)
  this.setState({ display: String(result) });
  console.log(result)
  }

  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={e => this.updateHeader(e)} />
        <h1 id="header"> {this.state.header} </h1>
        <img
          className="remove-highlight"
          src={calculatorImg}
          alt="calculator"
        />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total"> {this.state.display}</span>
          </div>

          <div className="btn clear" onClick={e => this.updateClear()}/>

          <div className="btn zero" onClick={e => this.updateDisplay("0")} />
          <div className="btn one" onClick={e => this.updateDisplay("1")} />
          <div className="btn two" onClick={e => this.updateDisplay("2")} />
          <div className="btn three" onClick={e => this.updateDisplay("3")} />
          <div className="btn four" onClick={e => this.updateDisplay("4")} />
          <div className="btn five" onClick={e => this.updateDisplay("5")} />
          <div className="btn six" onClick={e => this.updateDisplay("6")} />
          <div className="btn seven" onClick={e => this.updateDisplay("7")} />
          <div className="btn eight" onClick={e => this.updateDisplay("8")} />
          <div className="btn nine" onClick={e => this.updateDisplay("9")} />

          <div className="btn equal" onClick={e => this.calculate("=")}/>
          <div className="btn multiply" onClick={e => this.setOperator("*")}/>
          <div className="btn divide" onClick={e => this.setOperator("/")}/>
          <div className="btn subtract" onClick={e => this.setOperator("-")}/>
          <div className="btn add" onClick={e => this.setOperator("+")}/>
        </div>
      </div>
    );
  }
}

export default Calculator;
