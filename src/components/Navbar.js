
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Index from '../pages/Index';
import Profile from '../pages/Profile';
function Navbar() {
    return (

        <nav className="">
            <BrowserRouter>

                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row bg-dark">
                    <li className="nav-item m-2">
                   
                    </li>
                        
                        <li className="nav-item m-2"><NavLink to="/">inicio</NavLink></li>
                        <li className="nav-item m-2"><NavLink to="/profile">perfil de usuario</NavLink></li>

                    </ul>
                </div>
                <Route exact path="/" component={Index} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/prof" component={Profile} />
            </BrowserRouter>
        </nav>

    );
}

export default Navbar;
