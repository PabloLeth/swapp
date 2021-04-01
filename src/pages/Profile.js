import Rota from '../components/Rota'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './profile.css';
function Profile() {
 const { url } = useRouteMatch();
    return (
      <>
      <Rota />
    
      
      </>
    );
  }
  
  export default Profile;
  