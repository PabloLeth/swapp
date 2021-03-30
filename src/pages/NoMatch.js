import { Link } from 'react-router-dom';
function NoMatch() {
    return (
      <>
     
      <div className="">
       <h1>Ops! dirección erronea!</h1>
       <h3>parece que te has conundido quizas quieres  <Link to= "/">volver</Link> a la pagina principal? </h3>
       
      </div>
  
      </>
    );
  }
  
  export default NoMatch;
  