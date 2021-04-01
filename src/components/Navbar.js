import { NavLink, Link } from 'react-router-dom'
import {useAuth} from '../context/auth';
import jwt_decode from "jwt-decode";

function Navbar({boss, logged, logout}) {

    return (
     <>
        <nav className="">
                <div className="">
                    <ul className="navbar-nav bd-navbar-nav flex-row bg-dark">
                        {/* <li className="nav-item m-2"><NavLink to="/home">Inicio</NavLink></li> */}
                        {/* <li className="nav-item m-2"><NavLink to="/chat">Chat</NavLink></li> */}
                      
                        {(logged())? <li className="nav-item m-2"><NavLink to="/Pool"><i class="fas fa-search"></i>Busca turno</NavLink></li>: ""}
                        {(logged())? <li className="nav-item m-2"><NavLink to="/profile">Perfil de usuario</NavLink></li> : ""}
                        {(boss())  ? <li className="nav-item m-2"><NavLink to="/manager">Manager</NavLink></li> : ""} 
                        {(logged())? "" : <li className="nav-item m-2"><NavLink to="/login">login</NavLink></li>}
                        {(logged())? <li className="nav-item m-2"><Link onClick={()=>logout()} to= "/">logut</Link></li> : ""}
                    </ul>
                </div>
        </nav>
    </>
    );
}

export default Navbar;
