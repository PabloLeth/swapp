import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Weekshifts from './Weekshifts';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
function RotaMaker() {
  const arrowL =  <FontAwesomeIcon icon={faArrowLeft} />
  const arrowR =  <FontAwesomeIcon icon={faArrowRight} />
  //const dataResponse = [{"worker":"antonio ","id":2,"shifts":[]},{"worker":"DA BOSS","id":3,"shifts":[]},{"worker":"antonio","id":4,"shifts":[]},{"worker":"ana","id":5,"shifts":[{"id":12,"date":{"date":"2021-03-29 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-29 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-29 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":13,"date":{"date":"2021-03-29 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-29 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-29 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":14,"date":{"date":"2021-03-30 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-30 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-30 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":15,"date":{"date":"2021-03-30 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-30 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-30 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":16,"date":{"date":"2021-03-31 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-31 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-31 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":17,"date":{"date":"2021-03-31 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-31 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-31 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":18,"date":{"date":"2021-04-01 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-01 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-01 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":19,"date":{"date":"2021-04-01 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-01 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-01 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":20,"date":{"date":"2021-04-02 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-02 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-02 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":21,"date":{"date":"2021-04-02 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-02 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-02 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":22,"date":{"date":"2021-04-03 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-03 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-03 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":23,"date":{"date":"2021-04-03 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-03 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-03 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":24,"date":{"date":"2021-04-04 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-04 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-04 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":25,"date":{"date":"2021-04-04 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-04 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-04 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true}]},{"worker":"Raquel","id":6,"shifts":[]},{"worker":"Belen","id":7,"shifts":[]},{"worker":"juan","id":8,"shifts":[]},{"worker":"rocio","id":9,"shifts":[]},{"worker":"Pedro","id":10,"shifts":[]},{"worker":"laura","id":11,"shifts":[]},{"worker":"andrea","id":12,"shifts":[]},{"worker":"alejandro","id":13,"shifts":[]},{"worker":"eladio","id":14,"shifts":[]}]
    const dayName = ["#","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const shfitType = ["1", "2"]; /* necesito cambiarlo por 2 y 1 para el back? */
    // const month = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date;
    let token = localStorage.getItem("token");
    const todayWeek = [];
    
    for (let i = 1; i <= 7; i++) {
      let first = today.getDate() - today.getDay() + i ;
      let day = new Date(today.setDate(first));
      todayWeek.push(day);
    }
  
    const[shifts, setShifts] = useState([null]);

   const [week, setWeek] = useState(todayWeek);

   function getDataWeek(){
    const URLROTA = "http://localhost:8000/shift/manager/rotacheck";
  
    const reqOpt = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json',
                 Authorization : `Bearer ${token}`
                },
      body: JSON.stringify({dateFromjsn :(week[0].toISOString().slice(0, 10)), dateTojsn: (week[6].toISOString().slice(0, 10)) })
     
    };
  
     
      fetch(URLROTA,reqOpt)
      .then(response =>{ 
        if (response.status === 401){
          alert("epaaa no estas logueado tira patras!")
        }else{

          response.json()
          .then(data => {
          
             setShifts(data);
             
           
          }
    
          ).catch(error => {
           console.log("ha habido un error:", error)
          });
        }
      })
    } 
useEffect(() => {
  getDataWeek();
 
 
}, [week]);

   function handlenext(){
    nextWeek();
    
   }
   function handleprev(){
    prevWeek();
    
   }
   function nextWeek() {
    const weekResult = [];
    week.map(date=>{
       
        let result = new Date(date);
        result.setDate(result.getDate() + 7);
        weekResult.push(result);

    })
    setShifts([null])
    return setWeek(weekResult);
  }
  function prevWeek() {
    const weekResult = [];
    week.map(date =>{
       let result = new Date(date);
        result.setDate(result.getDate() - 7);
        weekResult.push(result);
    });
    setShifts([null]);
    return setWeek(weekResult);
  }

  const muestrashifts = () =>{
      console.log("turnos",shifts);
  }
 
  const sendFetch = () => {
    const URLADD = "http://localhost:8000/shift/manager/new";
  
    const reqOpt = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json',
                 Authorization : `Bearer ${token}`
                },
      body: JSON.stringify(shifts)
     
    };
  
     
      fetch(URLADD,reqOpt)
      .then(response =>{ 
        if (response.status === 401){
          alert("Ups! It seems you are not logged in")
        }else{

          response.json()
          .then(data => {
          swal(data.message, {icon: "success",})
           console.log(data);
           getDataWeek() ;
           
          }
    
          ).catch(error => {
           console.log("ha habido un error:", error)
          });
        }
      })
  }

  const sendToDb = () =>{
    swal({
      title: "Are you sure you want to commit?",
      text: "Just making sure this is the right rota",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willSend) => {
      if (willSend) {
          
          sendFetch();
        
      } else {
        swal(" No worries, keep working this hard and commit it when ready");
      }
    });
  
  }
  
  

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
       
            <form action=" " id="content-wrap">
                <table id="table-rota" className="table table-sm text-center mb-2">
            
                    <thead className="table-dark ">
                    <tr>
                        {dayName.map(value => {return <th scope="col">{value}</th>})}
                    </tr>
                    <tr>
                        <th className="th-rad" scope="col"></th>
                        {week.map(day => { return <th colspan="1" scope="col">{("0" + day.getDate()).slice(-2)} - {("0" + (day.getMonth() + 1)).slice(-2)}</th> })}

                    </tr>
                    </thead>
                    <tbody className="">
                       
                       {
                       shifts.map(worker =>
                     <Weekshifts worker= {worker} week= {week} setShifts = {setShifts} shifts = {shifts}/>
                      ) }
                    </tbody>
                    <tfoot className="text-center">
                      <tr>
                        <td colspan="8" className="table-dark">

                      <button  className="btn btn-success" onClick={()=>{sendToDb()}}>Enviar a DB</button>
                        </td>
                      </tr>
                    </tfoot>
                </table>
            </form>
           
            
  
    
        </>
    )
}

export default RotaMaker;