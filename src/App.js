import CategoryList from "./CategoryList";
import SiteList from "./SiteList";

var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sitioElegido: "MLA",
        }
    }

    elegirSitio = (idCountry) => {
        this.setState({
            sitioElegido: idCountry,
        });
    }

    render() {
        return (
            <div>
                <SiteList elegirSitio={this.elegirSitio}/>
                <CategoryList sitioElegido={this.state.sitioElegido}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;