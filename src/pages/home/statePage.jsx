import React from 'react';
import {useLocation} from 'react-router-dom'

const StatePage = () => {


    const location = useLocation()

    console.log(location.state.online)
    


    return (
        <div>
            <h1> state : {location.state.online}</h1>
        </div>
    );
}

export default StatePage;
