import { useState, useEffect } from 'react';
import ModalShift from './ModalShift';
import BodyRota from './BodyRota';
import {Redirect, Route} from 'react-router-dom';


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
    // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTY0MjgzMDcsImV4cCI6MTYxNjQzMTkwNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYW5pdGFkaW5hbWl0YUBob3RtYWlsLmNvbSJ9.NcUUgJm130Yiknf0StRLj0CIHTAQp1CDFWHFSWzB_lUi3NGlZHUB01r9er5p1i_Ec1p0LwgvUh1im4FsXo85-GJKrW987smTElBkSt0nuAAj2gr_2fEcmwrZC3m_SHWwfypYppBmhfQQvJHHAk9N37jMtxTprKZ1DNN0dou975URJWndnxzhrjCg-eRMtrDMsciIgDp1P05dVi12rKdojdyizI2t2vPOy5FxFo8TgWN0i_N9uNVc9xhC01ySIfF6uHRmF1M1ILUuQ63-0mrDljQIqCbhFMVwhrdQIEXvap2sbgpMnxQ0lUxnulJIYyB_ivv5UPkPximwzlZ5tGxVuQ";
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