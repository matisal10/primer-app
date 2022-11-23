import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import '../../style/clock.scss';

export const Clock = (props) => {

    const iniPer = {
        fecha: new Date(),
        edad: 0,
        nombre: "mati",
        apellidos: "salinas"
    }

    const [persona, setPersona] = useState(iniPer);
    const [fecha, setFecha] = useState(persona.fecha);
    const [edad, setEdad] = useState(persona.edad);


    function tick() {
        setEdad(edad + 1)
        setFecha(new Date())
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerID)
        };
    },);


    return (
        <div>
            <h2 className='hora'>
                Hora Actual:
                {fecha.toLocaleTimeString()}
            </h2>
            <h3 className='nombre'>{persona.nombre} {persona.apellidos}</h3>
            <h4 className='edad'>Edad: {edad}</h4>
        </div>
    )
}

Clock.propTypes = {

};

