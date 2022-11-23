import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    const miRef = useRef()

    function incrementar1() {
        setcontador1(contador1 + 1)
    }

    function incrementar2() {
        setcontador2(contador2 + 1)
    }
    
    // useEffect(() => {
    //     console.log("cambio en el estado")
    //     console.log("mostrando ref a elem del dom: ")
    //     console.log(miRef)
    // });

    useEffect(() => {
        console.log("cambio en el estado del cont1 / cont2")
        console.log("mostrando ref a elem del dom: ")
        console.log(miRef)
    },[contador1,contador2]);

    return (
        <div>
            <h1>ejemplo 2 useState, useEffect, useRef</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={miRef}>
                ejemplo de elem ref 
            </h4>

            <div>
                <button onClick={incrementar1}>incrementar1</button>
                <button onClick={incrementar2}>incrementar2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
