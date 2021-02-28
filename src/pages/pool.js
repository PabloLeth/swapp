import ListShifts from '../components/ListShifts';
import SearchShifts from '../components/SearchShifts';
import './pool.css';
function pool() {
    return (
      <>
     
      <div className="container">
       <p>este es el pool donde aparecen los turnos que se van a cambiar con otros usuarios</p>
      <SearchShifts />
      <ListShifts />
      </div>
      </>
    );
  }
  
  export default pool;
  