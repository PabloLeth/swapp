import ShiftList from '../components/ShiftList';
import SearchShifts from '../components/SearchShifts';
import { useEffect, useState } from 'react';
import './pool.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

function Pool() {
  const sad =  <FontAwesomeIcon icon={faFrownOpen} />
  let token = localStorage.getItem("token");
  const [{ data, error, isLoading }, dispatch] = useState({
    data: null,
    error: null,
    isLoading: true
  });
  const [filteredData, setFilteredData]=useState(data);
  // const [taken, setTaken] = useState("");

  const URLPOOL = "http://localhost:8000/shift/pool";
  const poolFetch = ()=>{
    fetch(URLPOOL, {headers: { Authorization : `Bearer ${token}`}, })

    .then(response => response.json())
    .then(data => {dispatch({ data, error: null, isLoading: false })

      console.log(data);
     }

    ).catch(error => {
      dispatch({ data: null, error, isLoading: false })
      console.log("ha habido un error:", error)
    });
  }
  useEffect(() => {
   
    poolFetch();

  }, []);

 
  return (
    <>

      <div className="container">
        {/* <p>este es el Pool donde aparecen los turnos que se van a cambiar con otros usuarios</p> */}
        {isLoading ? 
        <ShiftList data={filteredData}/> : 
        <SearchShifts setFilteredData = {setFilteredData} data = {data} filteredData = { filteredData}/> 
        }
       
        {/* <div className="container pool-back"> */}
        <div className={` container card-deck ${ filteredData ? filteredData.length==0?  "":"pool-back":""}`}>
          <div className=" d-flex ">
           { filteredData ? filteredData.length==0?  <h3>No results to show {sad} </h3>:<ShiftList data={filteredData} setFilteredData = {setFilteredData} />:""}
          </div>
        </div>
         
      </div>
      {/* <div className="aire"></div> */}
      <Footer />
    </>
  );
}

export default Pool;
