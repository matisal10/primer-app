import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const NoFoundPage = () => {

    const history = useNavigate()

    const navigate = (path) => {
        history(path);
    }

    const goBack = () => {
        history(-1)
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={ () => navigate('/')}>Go to home</button>
        </div>
    );
}

export default NoFoundPage;
