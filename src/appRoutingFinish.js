import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, matchPath } from 'react-router-dom'
import TaskList from './components/container/task_list';
import NoFoundPage from './pages/404/noFoundPage';
import LoginPage from './pages/auth/loginPage';
import RegisterPage from './pages/auth/registerPage';
import DashboardPage from './pages/dashboard/dashboardPage';


function AppRoutingFinish() {

    let loggedIn = false

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={loggedIn ? <Navigate to='/dashboard'/>  : <Navigate replace to="/login" />}>
                    </Route>
                    <Route path='/dashboard' element={loggedIn ? <DashboardPage/>  : <Navigate replace to="/login" />}>
                    </Route>
                    <Route exat path='/login' element={<LoginPage/>} />
                    <Route path='/register' element={<RegisterPage/>}/>
                    <Route path='/task' element={loggedIn ? <TaskList/>  : <Navigate replace to="/login" />}>
                    </Route>
                    <Route element={<NoFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutingFinish;
