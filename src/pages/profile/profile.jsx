import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const Profile = ({user}) => {

    const history = useNavigate()

    const navigate = (path) => {
        history(path);
    }

    const goBack = () => {
        history(-1)
    }

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={()=>navigate('/tasks')}>tasks</button>
            <button onClick={goBack}>Go back</button>
        </div>
    );
}

export default Profile;
