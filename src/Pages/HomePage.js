import React, { Component } from 'react';
import Calculator from '../Components/Calculator';

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render=()=> {
        return (
            <>
                <h2>Calculator</h2>
                <Calculator />
            </>
        )
    }
}

export default HomePage;