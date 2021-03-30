
import { NavLink, useRouteMatch } from 'react-router-dom'
import './profile.css';
function Profile() {
 const { url } = useRouteMatch();
    return (
      <>
       <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row bg-light">
                        <li className="nav-item m-2"><NavLink to={`${url}/rota`}>rota</NavLink></li>
                        {/* <li className="nav-item m-2"><NavLink to={`${url}/chat`}>chat</NavLink></li>    */}
                        {/* <li classN ame="nav-item m-2"><NavLink to={`${url}/chat`}>chat</NavLink></li>    */}

                    </ul>
                </div>
      <div>
        
     
       
      </div>
   
      </>
    );
  }
  
  export default Profile;
  