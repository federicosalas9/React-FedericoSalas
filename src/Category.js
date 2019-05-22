var React = require('react');

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            picture: undefined
        };
    }

    componentDidMount() {
        fetch("https://api.mercadolibre.com/categories/" + this.state.id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    picture: data.picture
                });
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="card col-3">
                <div className="row">
                    <div className="col-sm-8">
                        <h3>{this.state.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={this.state.picture} alt="Category Logo"/>
                    </div>
                </div>
                <div className="row">
                    <ul className="col-sm-8">
                        <h3>{this.state.id}</h3>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category;