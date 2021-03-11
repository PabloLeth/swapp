
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Index from '../pages/Index';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Manager from '../pages/Manager';
import Pool from '../pages/Pool';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from '../PrivateRoute';
import {useAuth} from '../context/auth';
import Rota from "../components/Rota";
import ChatWindow from "../components/ChatWindow";
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
                        <li className="nav-item m-2"><NavLink to="/home">Inicio</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/Pool">Busca turno</NavLink></li>   
                        <li className="nav-item m-2"><NavLink to="/profile">Perfil de usuario</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/chat">Chat</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/manager">Manager</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/login">login</NavLink></li>
                    <li><button onClick={()=>logout()}>logout</button></li>
                    </ul>
                </div>
                <Route exact path="/" component={Index} />
                <Route  path="/home" component={Home} />
                <Route  path="/Pool" component={Pool} />
                <Route  path="/profile" component={Profile} />
                <Route  path="/profile/rota" component={Rota} />
                <Route  path="/profile/chat" component={ChatWindow} />
                <PrivateRoute  path="/manager" component={Manager} /> 
                <Route  path="/chat" component={Chat} />
                <Route  path="/login" component={LoginPage} />

            </BrowserRouter>
        </nav>

    );
}

export default Navbar;
