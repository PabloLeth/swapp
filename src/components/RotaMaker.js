import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Weekshifts from './Weekshifts';
function RotaMaker() {
  const dataResponse = [
       
    {
        "worker": "antonio ",
        "id": 2,
        "shifts": [
          {
            "id": 1,
            "startShift": {
              "date": "2021-03-24 12:00:00.000000",
              "timezone_type": 3,
              "timezone": "Europe/Berlin"
            },
            "endShift": {
              "date": "2021-03-24 18:00:00.000000",
              "timezone_type": 3,
              "timezone": "Europe/Berlin"
            },
            "shiftType": "morning"
          },
          {
            "id": 3,
            "startShift": {
              "date": "2021-03-25 10:00:00.000000",
              "timezone_type": 3,
              "timezone": "Europe/Berlin"
            },
            "endShift": {
              "date": "2021-03-25 16:00:00.000000",
              "timezone_type": 3,
              "timezone": "Europe/Berlin"
            },
            "shiftType": "morning"
          },
          {
            "id": 8,
            "startShift": {
              "date": "2021-03-25 17:30:00.000000",
              "timezone_type": 3,
              "timezone": "Europe/Berlin"
            },
            "endShift": {
              "date": "2021-03-25 22:30:00.000000",
              "timezone_type": 3,
              "timezone": "Europe/Berlin"
            },
            "shiftType": "evening"
          }
        ]
      },
    {"worker": "DA BOSS","id": 3},
    {"worker": "antonio","id": 4},
    {"worker": "ana","id": 5},
    {"worker": "Raquel","id": 6},
    {"worker": "Belen","id": 7},
    {"worker": "juan","id": 8},
    {"worker": "rocio","id": 9},
    {"worker": "Pedro","id": 10},
    {"worker": "laura","id": 11},
    {"worker": "andrea","id": 12},
    {"worker": "alejandro","id": 13},
    {"worker": "eladio","id": 14}
  ]
                     // const week = ["#","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"];
    const shfitType = ["morning", "evening"]; /* necesito cambiarlo por 2 y 1 para el back? */
    const month = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const today = new Date;
    let token = localStorage.getItem("token");
    const todayWeek = [];
    
    for (let i = 1; i <= 7; i++) {
      let first = today.getDate() - today.getDay() + i ;
      let day = new Date(today.setDate(first));
      todayWeek.push(day);
    }
    // const[dataResponse, setDataResponse]= useState([]);
    const[shifts, setShifts] = useState(dataResponse);

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
  
     /* checkear el fetch  */
      fetch(URLROTA,reqOpt)
      .then((response) => {
        if (response.status === 240){
            /* hace falta este if? */
        };
          response.json() })
      .then(data => {
        console.log(data.answer);
        // setDataResponse(data);
      }

      ).catch(error => {
       console.log("ha habido un error:", error)
      });
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

    return setWeek(weekResult);
  }
  function prevWeek() {
    const weekResult = [];
    week.map(date =>{
       let result = new Date(date);
        result.setDate(result.getDate() - 7);
        weekResult.push(result);
    })
    return setWeek(weekResult);
  }


    
     
    const bodyCreate = 
        <> {dataResponse.map(worker =>
          <Weekshifts worker= {worker} week= {week} setShifts = {setShifts} shifts = {shifts}/>
          )}
        </>;
   
    const muestrashifts = () =>{
        console.log(shifts);
    }
  

    return (
        <>
        <div className="container row justify-content-around ">
            <div  className="d-flex justify-content-center align-items-end">
                <input type="button" value="semana anterior"onClick={()=>{handleprev()}}  />
            </div>
            <div className="text-center" >
                <h1>{week[0].getFullYear()}</h1>
                <h3>semana del {week[0].getDate()} de {month[week[0].getMonth()]} al {week[6].getDate()} de {month[week[6].getMonth()]}</h3>
            </div>
            <div  className="d-flex justify-content-center align-items-end">
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
                        {/* condicion, si hay datos{body} : {} */}
                       {/*  {body} */}
                        {bodyCreate}
                    </tbody>
                </table>
            </form>
            <button onClick={()=>{muestrashifts()}}>MUESTRA LOS SHIFTS EN CONSOLA</button>
          
        </>
    )
}

export default RotaMaker;