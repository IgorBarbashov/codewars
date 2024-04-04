const React = require("react");

class Beast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name === '' ? '' : props.name || 'Yeti'
        }
    }

    render() {
        const {name} = this.state;

        return(
            <input
                type='text'
        id='controlledName'
        value={name}
        onChange={e => this.setState({name: e.target.value})}
        />
    );
    }
};

module.exports = Beast;