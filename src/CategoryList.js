import Category from "./Category";

var React = require('react');

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
        //El componente aun no está disponible en el DOM
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        if (this.props.sitioElegido && this.props.sitioElegido !== "MPT") {
            fetch('https://api.mercadolibre.com/sites/' + this.props.sitioElegido + '/categories')
                .then(response => response.json())
                .then(categories => {
                    this.setState({categories: categories})
                });
        } else {
            alert("El sitio elegido no tiene categorias");
        }
    }


    componentDidUpdate(prevProps) {
        const shouldUpdate = prevProps.sitioElegido !== this.props.sitioElegido;
        shouldUpdate && this.fetchData();
    }

    render() {
        return (
            this.state.categories.length > 0 ?
                <div className="row">
                    {this.state.categories.map(category => <Category key={category.id} name={category.name}
                                                                     id={category.id}/>)}
                </div>
                :
                <p>Cargando categorias...</p>
        );
    }

}

export default CategoryList;