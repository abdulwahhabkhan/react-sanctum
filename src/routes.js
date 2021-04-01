import Login from './pages/auth/login'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import ProjectsList from './pages/projects'
import Error404 from "./pages/error/Error404";

const routes = [
    {path: '/login', component : Login, noHeader: true, meta: {title: 'Login'}},
    {path: '/dashboard', component : Dashboard, noHeader: false, meta: {title: 'Dashboard'}},
    {path: '/projects', component : ProjectsList, noHeader: false, meta: {title: 'Projects'}},
    {path: '/projects/current', component : ProjectsList, noHeader: false, meta: {title: 'Projects'}},
    {path: '/projects/completed', component : ProjectsList, noHeader: false, meta: {title: 'Projects'}},
    {path: '/', component : Home, noHeader: false, meta: {title: 'Home'}},
    {path: '*', component : Error404, noHeader: false, meta: {title: 'Error404'}},
]

export default routes