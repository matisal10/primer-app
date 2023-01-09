import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axios-service';

const AxiosExample = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        obtainUser()
    }, []);

    const obtainUser = () =>{
        getRandomUser()
        .then((response) => {
            if (response.status === 200) {
                setUser(response.data.results)
                console.log(response.data.results)
            }
        })
        .catch((error) => {
            alert(`error: ${error}`)
        })
    }

    return (
        <div>
            <h1>Axios example</h1>
            {
                user.name.title != null  ?
                    (<div>
                        {/* <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2> */}
                        <h3>Email: {user.email}</h3>
                        {/* <img alt='avatar' src={user.picture.large} /> */}
                    </div>)
                    :
                    (<div>
                        <p>Generate a new user</p>
                        <button onClick={obtainUser} >New user</button>
                    </div>)
            }
        </div>
    );
}

export default AxiosExample;
