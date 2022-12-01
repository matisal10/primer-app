import React from 'react';
import { useNavigate } from 'react-router-dom'

import  Button  from '@mui/material/Button';
import CopyRight from '../../components/pure/copyRight';

const DashboardPage = () => {

    const navigate = useNavigate();

    const logOut =()=>{
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logOut}>logOut</Button>
            <CopyRight></CopyRight>
        </div>
    );
}

export default DashboardPage;
