import { Link } from 'react-router-dom';
import './index.css';
function Indice() {
  return (
    <>

      <div className="bg-pic">
        <div className="container align-self-center " id="index-container">
          <div className="container my-4">
            <h1>Bienvenidos a la experiencia de Swapp</h1>
          </div>
          <div className="container my-4 ">
            <h3>La herramienta perfecta tanto para ti como para tu equipo de trabajo. </h3>
          </div>
          <div className="container my-4 text-center ">
            <h6> ¿Cansado de que tu equipo este a disgusto con los turnos de trabajo semanales que tanto trabajo te costó hacer? </h6>
            <h6> ¿Estas harta de que vengan a pedirte cambios de turno y luego surjan problemas?</h6>
            <h6> Haz posible que puedan cambiar sus turnos de trabajo.  </h6>
            <h6>Deja que nos encargemos nosotros. </h6>
          </div>

          <div className="row justify-content-center  my-4">
            <Link to="/login"> ¿Empezamos?</Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Indice;
