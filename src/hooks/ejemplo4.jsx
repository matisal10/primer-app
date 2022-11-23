import React from 'react';
import PropTypes from 'prop-types';


const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                children props
            </h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {props.children}
        </div>
    );
};


Ejemplo4.propTypes = {

};


export default Ejemplo4;
