import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log("instancia componente")
    }
    

    componentDidMount(){
        console.log("willmount: antes del montaje de componente")
    }

    componentWillMount(){
        console.log("didmount: justo al acabar montaje de componente antes de renderizarlo")
    }

    componentWillReciveProps(nextProps){
        console.log("willreciveprops: si va a recibir nuevas props")
    }

    shouldComponentUpdate(nextProps, nextState){
        // controla si debe o no actualizarce
        console.log("")
    }

    componentDidUpdate(nextProps, nextState){
        console.log("willupdate: justo antes de actualizarte")
    }

    componentWillUnmount(){
        console.log("willUnmount: justo antes de ")
    }




    render() {
        return (
            <div>
                
            </div>
        );
    }

}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
