var React = require('react');

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
        };
    }

    render() {
        return (
            <option value={this.state.id}>{this.state.name}</option>
        )
    }
}

export default Site;