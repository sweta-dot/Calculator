import React, { Component } from 'react';

class KeypadComponent extends Component {

    render() {
        return (
            <div className="button">
                <div className="first">
                    <button className="keys operator" name="÷" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                    <button className="keys operator" name="×" onClick={e => this.props.onClick(e.target.name)}>x</button>
                    <button className="keys operator" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                    <button className="keys operator" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />

                    <button className="keys" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button className="keys" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className="keys" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className="keys" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button><br />

                    <button className="keys" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className="keys" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className="keys" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button className="keys" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button><br />

                    <button className="keys" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className="keys" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className="keys" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button className="keys" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button><br />

                </div>
                <div className="second">
                    <button className="keys operator" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button><br />
                    <button className="keys operator" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button><br />
                    <button className="keys equals" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                </div>
            </div>
        );
    }
}

export default KeypadComponent;