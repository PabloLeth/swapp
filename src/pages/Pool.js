import Card from '../components/Card';
import SearchShifts from '../components/SearchShifts';
import { useEffect, useState } from 'react';
import './pool.css';

function Pool() {
 
  const [poolResults, setPoolResults] = useState([]);
  const URLPOOL = "http://localhost/symfonyswapp/public/index.php/shift/pool";
  useEffect(() => {
    fetch(URLPOOL)
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
        setPoolResults(data);

      }).catch(error => console.log("ha habido un error:", error));


  },[]);

  return (
    <>

      <div className="container">
        <p>este es el Pool donde aparecen los turnos que se van a cambiar con otros usuarios</p>
        <SearchShifts />
        {
          poolResults.map( shift => {
            console.log(shift);
            return <Card props = {shift}/>
          })
        }
      </div>
    </>
  );
}

export default Pool;
