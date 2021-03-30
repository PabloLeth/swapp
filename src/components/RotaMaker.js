import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Weekshifts from './Weekshifts';
function RotaMaker() {
  //const dataResponse = [{"worker":"antonio ","id":2,"shifts":[]},{"worker":"DA BOSS","id":3,"shifts":[]},{"worker":"antonio","id":4,"shifts":[]},{"worker":"ana","id":5,"shifts":[{"id":12,"date":{"date":"2021-03-29 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-29 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-29 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":13,"date":{"date":"2021-03-29 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-29 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-29 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":14,"date":{"date":"2021-03-30 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-30 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-30 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":15,"date":{"date":"2021-03-30 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-30 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-30 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":16,"date":{"date":"2021-03-31 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-31 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-31 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":17,"date":{"date":"2021-03-31 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-03-31 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-03-31 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":18,"date":{"date":"2021-04-01 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-01 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-01 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":19,"date":{"date":"2021-04-01 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-01 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-01 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":20,"date":{"date":"2021-04-02 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-02 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-02 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":21,"date":{"date":"2021-04-02 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-02 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-02 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":22,"date":{"date":"2021-04-03 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-03 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-03 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":23,"date":{"date":"2021-04-03 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-03 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-03 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true},{"id":24,"date":{"date":"2021-04-04 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-04 10:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-04 16:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"morning","active":true},{"id":25,"date":{"date":"2021-04-04 00:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"startShift":{"date":"2021-04-04 18:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"endShift":{"date":"2021-04-04 20:00:00.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"shiftType":"evening","active":true}]},{"worker":"Raquel","id":6,"shifts":[]},{"worker":"Belen","id":7,"shifts":[]},{"worker":"juan","id":8,"shifts":[]},{"worker":"rocio","id":9,"shifts":[]},{"worker":"Pedro","id":10,"shifts":[]},{"worker":"laura","id":11,"shifts":[]},{"worker":"andrea","id":12,"shifts":[]},{"worker":"alejandro","id":13,"shifts":[]},{"worker":"eladio","id":14,"shifts":[]}]
                     // const week = ["#","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"];
    const shfitType = ["1", "2"]; /* necesito cambiarlo por 2 y 1 para el back? */
    const month = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
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
 
  const sendToDb = () =>{
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
          alert("epaaa no estas logueado tira patras!")
        }else{

          response.json()
          .then(data => {
          
           console.log(data);
             
           
          }
    
          ).catch(error => {
           console.log("ha habido un error:", error)
          });
        }
      })
  }
  
  

    return (
        <>
        <div className="row align-items-center">
            <div  className=" col d-flex justify-content-center">
                <input type="button" value="semana anterior"onClick={()=>{handleprev()}}  />
            </div>
            <div className="text-center col-8" >
                <h1>{week[0].getFullYear()}</h1>
                <h3>semana del {week[0].getDate()} de {month[week[0].getMonth()]} al {week[6].getDate()} de {month[week[6].getMonth()]}</h3>
            </div>
            <div  className="col d-flex justify-content-center">
            <input type="button" value="semana proxima" onClick={()=>{handlenext()}}/>
            </div>
        </div>
     
       
            <form action=" ">
                <table id="table-rota" className="table table-sm table-bordered text-center my-3">
                {/* <caption> Rota </caption> */}
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">#</th>
                            <th colspan="1" scope="col">Monday</th>
                            <th colspan="1" scope="col">Tuesday</th>
                            <th colspan="1" scope="col">Wednesday</th>
                            <th colspan="1" scope="col">Thursday</th>
                            <th colspan="1" scope="col">Friday</th>
                            <th colspan="1" scope="col">Saturday</th>
                            <th colspan="1" scope="col">Sunday</th>
                        </tr>
                        <tr>
                            <th scope="col"></th>
                            <th colspan="1" scope="col">{("0"+week[0].getDate()).slice(-2)}-{("0" + (week[0].getMonth() + 1)).slice(-2)}</th>
                            <th colspan="1" scope="col">{("0"+week[1].getDate()).slice(-2)}-{("0" + (week[1].getMonth() + 1)).slice(-2)}</th>
                            <th colspan="1" scope="col">{("0"+week[2].getDate()).slice(-2)}-{("0" + (week[2].getMonth() + 1)).slice(-2)}</th>
                            <th colspan="1" scope="col">{("0"+week[3].getDate()).slice(-2)}-{("0" + (week[3].getMonth() + 1)).slice(-2)}</th>
                            <th colspan="1" scope="col">{("0"+week[4].getDate()).slice(-2)}-{("0" + (week[4].getMonth() + 1)).slice(-2)}</th>
                            <th colspan="1" scope="col">{("0"+week[5].getDate()).slice(-2)}-{("0" + (week[5].getMonth() + 1)).slice(-2)}</th>
                            <th colspan="1" scope="col">{("0"+week[6].getDate()).slice(-2)}-{("0" + (week[6].getMonth() + 1)).slice(-2)}</th>
                       
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                       
                       {
                       shifts.map(worker =>
                     <Weekshifts worker= {worker} week= {week} setShifts = {setShifts} shifts = {shifts}/>
                      ) }
                    </tbody>
                </table>
            </form>
            <button onClick={()=>{muestrashifts()}}>MUESTRA LOS SHIFTS A</button>
            
            <button onClick={()=>{sendToDb()}}>Enviar a DB</button>
          
        </>
    )
}

export default RotaMaker;