
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Index from '../pages/Index';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Manager from '../pages/Manager';
import pool from '../pages/pool';
function Navbar() {
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

                    </ul>
                </div>
                <Route exact path="/" component={Index} />
                <Route exact path="/pool" component={pool} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/manager" component={Manager} /> 
                <Route exact path="/chat" component={Chat} />
            </BrowserRouter>
        </nav>

    );
}

export default Navbar;
