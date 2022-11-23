import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                el token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                la sesion es : {state.sesion}
            </h2>
        </div>
    );
}

export default function ComponentConContex() {

    const estadoIni = {
        token: '123456',
        sesion: 1
    }


    const [sesionData, setSesionData] = useState(estadoIni);

    function actualizarSesion() {
        setSesionData({
            token: 'jwt234213',
            sesion: sesionData.sesion + 1
        })
        console.log("🚀 ~ file: ejemplo3.jsx ~ line 45 ~ actualizarSesion ~ setSesionData", setSesionData)
    }

    return (
        <miContexto.Provider value={sesionData}>
            <h1>ejemplo3</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>actualizar Sesion</button>
        </miContexto.Provider>
    )
}





