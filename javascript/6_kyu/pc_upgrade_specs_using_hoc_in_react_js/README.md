First steps to learning the basics of higher order components (HOC) in ReactJS

A HOC is a function that takes a component as the first parameter and returns a function wrapping the first parameter.
```js
function withExample(Component) {
    return function(props) {
        return <Component />
    }
}
```
More about HOC: [ReactJS docs](https://legacy.reactjs.org/docs/higher-order-components.html).

If you complete this kata try [Truncate paragraph using HOC in React JS](https://www.codewars.com/kata/truncate-paragraph-using-higher-order-component-in-react-js).

**Challenge**
You're building a new feature on your e-commerce site which displays two computer specs - basic and pro.

The `PcDisplay` component is already built and expects 5 props. `{ title, price, cpu, ram, ssd }`

You will need to build a `withPriceModel` HOC and using that to manage the price of the `BasicModel` and `ProModel` components.
- Build a HOC called `withPriceModel` which takes the `PcDisplay` component for first param and price increase number for the second param
- `withPriceModel` will manage the price and must set a default price of 50
- `BasicModel` should use the default price set by `withPriceModel`
- `ProModel` should use `withPriceModel` to increase the price by 60. Total price should be 110
- Since the `withPriceModel` is responsible for managing the price, ensure that it can't be overritten by passing in a price prop