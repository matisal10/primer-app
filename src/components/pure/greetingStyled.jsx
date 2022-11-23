import React, { useState } from 'react';

const loggedStyle = {
    color: 'white'
}

const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);
    const greetingUser = () => (<p>hola, {props.name} </p>)
    const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {logged ? greetingUser() : pleaseLogin()}
            <button onClick={() => {
                console.log("boton pulsado")
                setLogged(!logged)
            }}>
                {logged ? 'logout' : 'login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
