const React = require('react');

// Don't change PcDisplay
const PcDisplay = (props) => {
    return (<div>
        <h1>{props.title}</h1>
        <p id="price">£{props.price}</p>
        <ul>
            <li><label>CPU</label> <span>{props.cpu}</span></li>
            <li><label>RAM</label> <span>{props.ram}</span></li>
            <li><label>SSD</label> <span>{props.ssd}</span></li>
        </ul>
    </div>);
};

// Implement HOC -> returns a functions that wraps the passed in `PcDisplay` component
let withPriceModel = (Component, increasePrice = 0) => {
    const defaultPrice = 50;
    return function({price, ...restProps}) {
        return <Component price={defaultPrice + increasePrice} {...restProps}/>
    }
};

// Build basic and pro model components using `withPriceModel`
let BasicModel = withPriceModel(PcDisplay);

let ProModel = withPriceModel(PcDisplay, 60);