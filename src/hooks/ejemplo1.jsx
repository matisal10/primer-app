// ejemplo de hook useState

import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'pepe',
        email: 'fsdf@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    function incrementarCont() {
        setContador(contador + 1)
    }

    function actualizarPer() {
        setPersona(
            {
                nombre: 'jose',
                email: 'jose@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>ejemplo 1 useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos persona: </h2>
            <h3>nombre: {persona.nombre}</h3>
            <h4>email: {persona.email}</h4>
            <div>
                <button onClick={incrementarCont}>Aumentar cont</button>
                <br></br>
                <button onClick={actualizarPer}>actualizar persona</button>
            </div>

        </div>
    );
}

export default Ejemplo1;
