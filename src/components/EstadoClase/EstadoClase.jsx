import React from "react";
import styles from "./EstadoClase.modules.css"



class EstadoClase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,

        };
    }

    render () {
        const aumentar = () => {
            this.setState({count: this.state.count + 1});
        };

        const disminuir = () => {
           this.state.count > 0 && this.setState({count: this.state.count - 1});
        };


        return (
            <>
            <h1>Contador estado de (clase)</h1>
            <h3>{this.state.count}</h3>
            <button onClick={disminuir}>-</button>
            <button onClick={aumentar}>+</button>
            
            </>
        )
    }
}


export default EstadoClase;