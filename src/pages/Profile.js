import Rota from '../components/Rota'
import { useRouteMatch } from 'react-router-dom'
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
  