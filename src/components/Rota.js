import { useState, useEffect } from 'react';
import ModalShift from './ModalShift';
import BodyRota from './BodyRota';
import Login from './Login';

function Rota() {
    const dayName = ["#","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
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
            .then(data => {setData(data);console.log(data)})
        }
        if(response.status==401){
            alert("Wopa! no estas logueado o no tienes permisos para acceder");
            
        }
    })
       
    .catch(error => {
     console.log("ha habido un error:", error)
    }); 

    }, [week]);
     
         
               
    const rota = [
        {
            "startShift": {
                "date": "2021-03-29 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-03-29 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 12
        },
        {
            "startShift": {
                "date": "2021-03-29 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-03-29 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 13
        },
        {
            "startShift": {
                "date": "2021-03-30 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-03-30 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 14
        },
        {
            "startShift": {
                "date": "2021-03-30 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-03-30 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 15
        },
        {
            "startShift": {
                "date": "2021-03-31 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-03-31 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 16
        },
        {
            "startShift": {
                "date": "2021-03-31 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-03-31 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 17
        },
        {
            "startShift": {
                "date": "2021-04-01 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-01 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 18
        },
        {
            "startShift": {
                "date": "2021-04-01 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-01 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 19
        },
        {
            "startShift": {
                "date": "2021-04-02 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-02 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 20
        },
        {
            "startShift": {
                "date": "2021-04-02 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-02 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 21
        },
        {
            "startShift": {
                "date": "2021-04-03 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-03 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 22
        },
        {
            "startShift": {
                "date": "2021-04-03 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-03 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 23
        },
        {
            "startShift": {
                "date": "2021-04-04 10:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-04 16:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "morning",
            "worker": "ana",
            "job": "Waiter",
            "id": 24
        },
        {
            "startShift": {
                "date": "2021-04-04 18:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "endShift": {
                "date": "2021-04-04 20:00:00.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "swapping": false,
            "swappable": true,
            "branch": "Málaga",
            "shiftType": "evening",
            "worker": "ana",
            "job": "Waiter",
            "id": 25
        }
    ]


    const shiftToPool = (e) => {
        alert("aqui mandará el detalle del turno con boton empezar proceso de cambio");
       // e.target.id
        // setShow(!show);

        //  if (confirm(` confirma que desea deshacerse de este turno ${shift.id}, ${shift.date} `)){
        //       functionfetchingtoswapping();
        //       alert("perfecto, tu turno ha ido a la piscina de turnos");
        //   }
        //aqui ira una funcion con un fetch para cambiar swapping a true
    }

   

    return (
        <>
            <div className="container row justify-content-around ">
                <input type="button" value="semana anterior" onClick={() => { handleprev() }} />
                <div className="text-center" >
                    <h1>{week[0].getFullYear()}</h1>
                    <h3>semana del {week[0].getDate()} de {monthName[week[0].getMonth()]} al {week[6].getDate()} de {monthName[week[6].getMonth()]}</h3>
                </div>
                <input type="button" value="semana proxima" onClick={() => { handlenext() }} />
            </div>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        {dayName.map(value => {return <th scope="col">{value}</th>})}
                    </tr>
                    <tr>
                        <th scope="col"></th>
                        {week.map(day => { return <th colspan="1" scope="col">{("0" + day.getDate()).slice(-2)} - {("0" + (day.getMonth() + 1)).slice(-2)}</th> })}

                    </tr>
                </thead>
                <tbody>
                    <BodyRota  data={data} />

                </tbody>
            </table>
        </>
    )
}

export default Rota;