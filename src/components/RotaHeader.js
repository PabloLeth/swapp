import { useState, useEffect } from 'react';
import ModalShift from './ModalShift';
import BodyRota from './BodyRota';
import {Redirect, Route} from 'react-router-dom';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';

function RotaHeader() {
    const arrowL =  <FontAwesomeIcon icon={faArrowLeft} />
    const arrowR =  <FontAwesomeIcon icon={faArrowRight} />
    const dayName = ["#","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [data, setData] = useState([]);
    const todayWeek = [];
    const today = new Date;
    for (let i = 1; i <= 7; i++) {
        let first = today.getDate() - today.getDay() + i;
        let day = new Date(today.setDate(first));
        todayWeek.push(day);
    }
    const [week, setWeek] = useState(todayWeek);

    
    let token = localStorage.getItem("token");
    const URLSHIFT = "http://localhost:8000/shift/rotauser";
    
    const reqOpt = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json',
                 Authorization : `Bearer ${token}`
        },
      body: JSON.stringify({dateFromjsn : week[0].toISOString().slice(0, 10), dateTojsn : week[6].toISOString().slice(0, 10)})
     
    };
  
    function handlenext() {
        nextWeek();
    }
    function handleprev() {
        prevWeek();
    }
    function nextWeek() {
        const weekResult = [];
        week.map(date => {

            let result = new Date(date);
            result.setDate(result.getDate() + 7);
            weekResult.push(result);

        })

        return setWeek(weekResult);
    }
    function prevWeek() {
        const weekResult = [];
        week.map(date => {
            let result = new Date(date);
            result.setDate(result.getDate() - 7);
            weekResult.push(result);
        })
        return setWeek(weekResult);
    }
    
    useEffect(() => {

    fetch(URLSHIFT,reqOpt)
    .then(response => {
        if (response.ok){
            response.json()
            .then(data => {setData(data);})
        }
        if(response.status==401){
            alert("Wopa! no estas logueado o no tienes permisos para acceder");
           
        }
    })
       
    .catch(error => {
     console.log("ha habido un error:", error)
    }); 

    }, [week]);
  

    return (
        <>
          <div className="row align-items-center bg-dates py-4">
            <div  className=" col d-flex justify-content-center">
               <a href="#" onClick={()=>{handleprev()}}>{arrowL} prev week</a>
            </div>
            <div className="text-center col-8" >
                <h1>{week[0].getFullYear()}</h1>
                <h3>Week from {week[0].getDate()} of {month[week[0].getMonth()]} to {week[6].getDate()} of {month[week[6].getMonth()]}</h3>
            </div>
            <div  className="col d-flex justify-content-center">
           
            <a href="#" onClick={()=>{handlenext()}}> next week {arrowR}</a>
            </div>
        </div> 
        </>
    )
}

export default RotaHeader;