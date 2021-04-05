import { NavLink, Link } from 'react-router-dom'
import {useAuth} from '../context/auth';
import jwt_decode from "jwt-decode";

function Navbar({boss, logged, logout}) {

    return (
     <>
        <nav className="">
                <div className="">
                    <ul className="navbar-nav bd-navbar-nav flex-row bg-dark align-items-center ">
                        {/* <li className="nav-item m-2"><NavLink to="/home">Inicio</NavLink></li> */}
                        {/* <li className="nav-item m-2"><NavLink to="/chat">Chat</NavLink></li> */}
                      
                        {(logged())? <li className="nav-item"><NavLink to="/"> <h1 className="logo"></h1></NavLink></li>: ""}
                        {(boss())  ? <li className="nav-item m-3"><NavLink to="/manager">Manager</NavLink></li> : ""} 
                        {(logged())? <li className="nav-item m-3"><NavLink to="/profile">User Profile</NavLink></li> : ""}
                        {(logged())? <li className="nav-item m-3"><NavLink className=""  to="/Pool"><i className="fas fa-search"></i>Search Shifts</NavLink></li>: ""}
                       <div className="ml-auto">
                       {(logged())? "" : <li className="nav-item m-3"><NavLink to="/login">Login</NavLink></li>}
                       {(logged())? <li className="nav-item m-3"><Link onClick={()=>logout()} to= "/">Logut</Link></li> : ""}</div>

                    </ul>
                </div>
        </nav>
    </>
    );
}

export default Navbar;
