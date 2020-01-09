import React,{ Component } from "react";


class Calculator extends Component{
    constructor(props){
        super(props)

        this.state={
            result : 0,
            operation : "+"
        };
    }
    handleSelection(event) {
        this.setState({operation: event.target.value});
      }

    calculate(){
        
     switch(this.state.operation){
        case '+': this.setState({result :parseInt(this.numberOneValue.value) + parseInt(this.numberTwoValue.value)});break;
        case '-': this.setState({result :parseInt(this.numberOneValue.value) - parseInt(this.numberTwoValue.value)});break;
        case '/': this.setState({result :parseInt(this.numberOneValue.value) / parseInt(this.numberTwoValue.value)});break;
        case '*': this.setState({result :parseInt(this.numberOneValue.value) * parseInt(this.numberTwoValue.value)});break;
      
    }
     }
    render(){
        return(
            <div className="container">
                <h1>Calculate with React!</h1>
                <div className="add">
                    <input type="text" ref={el => this.numberOneValue=el} />
                    <select value={this.state.value} onChange={this.handleSelection.bind(this)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                  
                    <input type="text" ref={el => this.numberTwoValue=el} />
                    <span>=</span>
                    <button onClick={(e) => this.calculate()}>calculate</button>

                <h3>{this.state.result}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;
