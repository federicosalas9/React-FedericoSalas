import Site from './Site.js'

var React = require('react');

class SiteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: []
        };
        //El componente aun no está disponible en el DOM
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/api.mercadolibre.com/sites')
            .then(response => response.json())
            .then(categories => {
                categories.forEach(site => {
                    let data = {
                        id: site.id,
                        name: site.name,
                    };
                    this.setState({sites: this.state.sites.concat([data])})
                })
            })
    }

    elegirSitio1 = (e) => {
        const {value} = e.target;
        this.props.elegirSitio(value);
    }


    render() {
        if (this.state.sites.length > 0) {
            return (
                <select className="form-control" id="sites" onChange={this.elegirSitio1} defaultValue={'null'}>
                    <option value='null'>Seleccionar Sitio</option>
                    {this.state.sites.map((site, index) => <Site key={index} name={site.name} id={site.id}/>)}
                </select>
            )
        }
        return (
            <p>Cargando Sitios...</p>
        )
    }
}


export default SiteList;