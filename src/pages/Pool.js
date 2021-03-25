import ShiftList from '../components/ShiftList';
import SearchShifts from '../components/SearchShifts';
import { useEffect, useState } from 'react';
import './pool.css';

function Pool() {

  const [{ data, error, isLoading }, dispatch] = useState({
    data: null,
    error: null,
    isLoading: true
  });
  const[filteredData, setFilteredData]=useState(data);


  const URLPOOL = "http://localhost:8000/shift/pool";

  useEffect(() => {
    fetch(URLPOOL)
      .then(response => response.json())
      .then(data => {dispatch({ data, error: null, isLoading: false })

        console.log(data);
       }

      ).catch(error => {
        dispatch({ data: null, error, isLoading: false })
        console.log("ha habido un error:", error)
      });


  }, []);

  // if (isLoading) return <Card />;
  // if (error) return <Card error={error} />;
  // // return <Card props={data} />
  return (
    <>

      <div className="container">
        <p>este es el Pool donde aparecen los turnos que se van a cambiar con otros usuarios</p>
        {isLoading ?<ShiftList data={filteredData}/> :  <SearchShifts setFilteredData = {setFilteredData} data = {data}/> }
       
        <ShiftList data={filteredData}/>
         
      </div>
    </>
  );
}

export default Pool;
