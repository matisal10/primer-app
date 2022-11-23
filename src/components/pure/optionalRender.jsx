import React, { useState } from 'react';



const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}

const unLoggedStyle = {
    color: 'white',
    backgroundColor: 'tomato',
    fontWeight: 'bold'
}


const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}


const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = ()=>{
    //     setAccess(!access)
    // }

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }
    // else{
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if (access) {
        optionalButton = <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction}></LogoutButton>
    }
    else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    let addMessage = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {optionalButton}
            {access ? <div>
                {nMessages === 1 && <p>You have {nMessages} new Message...</p>}
                {nMessages > 1 && <p>You have {nMessages} new Messages...</p>}
                {nMessages === 0 && <p>There re no new messages</p>}
                <button onClick={addMessage}>{nMessages === 0 ? 'add your first message' : 'add new message'}</button>
            </div>
                : null}
        </div>
    );
}

export default OptionalRender;
