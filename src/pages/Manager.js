import RotaMaker from '../components/RotaMaker'
import Register from '../components/Register'
import './manager.css';
function Manager() {
    return (
      <>
     
      <div>
        <h1>Perfil Manager</h1>
        <p>Esto es el perfil de manager solo accesible por el manager</p>
        <RotaMaker />
{/* <Register /> */}

      </div>
      
      </>
    );
  }
  
  export default Manager;
  