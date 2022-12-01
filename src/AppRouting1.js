import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, matchPath } from 'react-router-dom'
import HomePage from './pages/home/homePage'
import NotFoundPage from './pages/404/noFoundPage'
import AboutPage from './pages/about-faqs/aboutPage';
import Profile from './pages/profile/profile';
import TaskList from './components/container/task_list';
import TaskDetails from './pages/task/taskDetails';
import LoginPage from './pages/auth/loginPage';
import { useEffect } from 'react'
import StatePage from './pages/home/statePage';

function AppRouting1() {

  let logged = false

  let tasks = [
    {
      id: 1,
      name: 'dasd',
      description: 'dasdsad',
    },
    {
      id: 2,
      name: 'weqeqw',
      description: 'dasdsad',
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials')
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>||HOME|</Link>
          <Link to='/about'>|About|</Link>
          <Link to='/login'>|Login|</Link>
          <Link to='/task/1'>|tarea 1|</Link>
          <Link to='/task/2'>|tarea 2|</Link>
          <Link to='/404'>|not existing Route||</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route  path='/online-state' element={<StatePage/>}/>
            <Route path='/login' element={logged ? <HomePage /> : <LoginPage />} />
            <Route path='/profile' element={logged ?
              <Profile /> :
              <Navigate replace to="/login" />
            }
            >
            </Route>
            <Route path='about' element={<AboutPage />} />
            <Route path='faqs' element={<AboutPage />} />
            <Route path='/tasks' element={<TaskList />} />
            <Route
              exact
              path='/task/:id'
              render={
                (task)=>{
                  return <TaskDetails {...task}/>
                }
              }
            >
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default AppRouting1;
