import React, { Component } from 'react';
import KeypadComponent from './KeypadComponent';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strings: [0],
            result: 0
        }
        this.strings = [];
    }

    calculate = function (s) {
        s = s.join("");

        const tokens = s.match(/|\÷|\×|\)|\-|\+|\d+/g).filter(t => t !== '');

        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
                stack.push(token);
        }
        return stack.pop();
    }

    evaluate(exp) {

        let value = Number(exp[0]);

        for (let i = 1; i < exp.length; i += 2) {
            let operator = exp[i];
            let operand = Number(exp[i + 1]);

            if (operator === "÷") {
                value /= operand;
            } else if (operator === "×") {
                value *= operand;
            } else if (operator === "+") {
                value += operand;
            } else if (operator === "-") {
                value -= operand;
            }
        }
        this.setState({
            result: value
        })
    }

    onKeyClick = (e) => {
        if (e === "=") {
            this.calculate([...this.strings]);
        } else if (e === "CE") {
            this.strings = [];
            this.setState({
                expression: "",
                strings: [0],
                result: 0
            })
        } else {
            this.strings.push(e);
            this.setState({
                strings: this.strings
            })
        }
    }

    getExpressions = () => {
        let dom = [];
        for (let i = 0; i < this.state.strings.length; i++) {
            dom.push(
                <span>{this.state.strings[i]}</span>
            );
        }
        return dom;
    }

    render() {
        return (
            <div className="calculator">
                <div className="expressions-section">
                    {
                        this.getExpressions()
                    }
                    <div>Ans = {this.state.result}</div>
                </div>
                <hr />
                <KeypadComponent onClick={(e) => this.onKeyClick(e)} />
            </div>
        )
    }
}

export default Calculator;