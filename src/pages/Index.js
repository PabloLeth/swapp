import {Link} from 'react-router-dom';
import './index.css';
function Indice() {
    return (
      <>
     
        <div className="bg-pic">
      <div className="container  " id="index-container">

       <h1>Bienvenidos a la experiencia de Swapp</h1>
       <h3>La herramienta perfecta tanto para ti como para tu equipo de trabajo. </h3>
       <div className="container ">
         <h6> ¿Cansado de que tu equipo este siempre a disgusto con los turnos de trabajo semanales que tanto trabajo te cuestan hacer?, ¿estas harta de que vengan a pedirte los cambios de turno y que tengas que hacer cambios y luego surjan los problemas? haz posible que puedan cambiar sus turnos de trabajo sin problemas, ofrece la libertad de poder hacer sus cambios entre ellos sin tener que acudir a ti. deja que nos encargemos nosotros de ese engorro. </h6>
       </div>
      
       <div className="row justify-content-center">
         <Link to= "/login"> empezamos?</Link>
       </div>
      </div>
        </div>
  
      </>
    );
  }
  
  export default Indice;
  