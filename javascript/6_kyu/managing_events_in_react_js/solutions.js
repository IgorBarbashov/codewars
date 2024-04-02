import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    decrement = () => {
        this.setState(prev => ({counter: prev.counter - 1}));
    };

    increment = () => {
        this.setState(prev => ({counter: prev.counter + 1}));
    };

    render() {
        return (
            <div>
                <h1 id="counter">{this.state.counter}</h1>
                <button id="decrement" type="button" onClick={this.decrement}>
                    Decrement
                </button>
                <button id="increment" type="button" onClick={this.increment}>
                    Increment
                </button>
            </div>
        )
    }
}