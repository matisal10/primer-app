import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const HomePage = () => {

    const location = useLocation()
    const navigated = useNavigate()

    const navigate = (path) => {
        navigated(path);
    }

    const navigateProps = (path) => {
        navigated(path,{state: {online:true}});
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigateProps('/online-state')}>
                online-state
            </button>
            <h2>Dashboard</h2>
            <button onClick={() => navigate('/profile')} >
                Go to Profile
            </button>
        </div>
    );
}

export default HomePage;
