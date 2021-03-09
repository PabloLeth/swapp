
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Index from '../pages/Index';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Manager from '../pages/Manager';
import pool from '../pages/pool';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from '../PrivateRoute';
import {useAuth} from '../context/auth';
function Navbar() {
    const {setAuthTokens} = useAuth();
    const logout = ()=> {
        localStorage.removeItem("token");
        setAuthTokens("");
    }
    return (

        <nav className="">
            <BrowserRouter>

                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row bg-dark">
                        <li className="nav-item m-2"><NavLink to="/">Inicio</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/pool">Busca turno</NavLink></li>   
                        <li className="nav-item m-2"><NavLink to="/profile">Perfil de usuario</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/chat">Chat</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/manager">Manager</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/login">login</NavLink></li>
                    <li><button onClick={()=>logout()}>logout</button></li>
                    </ul>
                </div>
                <Route exact path="/" component={Index} />
                <Route exact path="/pool" component={pool} />
                <Route exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/manager" component={Manager} /> 
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/login" component={LoginPage} />

            </BrowserRouter>
        </nav>

    );
}

export default Navbar;
