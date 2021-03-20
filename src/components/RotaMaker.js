import { useState } from "react";
import ReactDOM from "react-dom";
function RotaMaker() {
   
                     // const week = ["#","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"];
    const shfitType = ["morning", "evening"]
    const month = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    const today = new Date;
    const todayWeek = [];
    
    for (let i = 1; i <= 7; i++) {
      let first = today.getDate() - today.getDay() + i ;
      let day = new Date(today.setDate(first));/* .toISOString().slice(0, 10); */
      todayWeek.push(day);
    }
 
    
   const [week, setWeek] = useState(todayWeek);

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

    const data = {
        "data": [
            {
                "name": "Pablo",
                "shifts": [
                    {
                        "shift_id": 1,
                        "shift_type": "MORNING",
                        "start_shift": "2021-02-10 10:01",
                        "end_shift": "2021-02-10 12:01"
                    },
                    {
                        "shift_id": 2,
                        "shift_type": "EVENING",
                        "start_shift": "2021-02-10 16:01",
                        "end_shift": "2021-02-10 20:01"
                    },
                    {
                        "shift_id": 3,
                        "shift_type": "EVENING",
                        "start_shift": "2021-02-11 16:02",
                        "end_shift": "2021-02-11 20:02"
                    },
                    {
                        "shift_id": 4,
                        "shift_type": "OFF",
                        "start_shift": "2021-02-12",
                        "end_shift": "2021-02-12"
                    },
                    {
                        "shift_id": 5,
                        "shift_type": "EVENING",
                        "start_shift": "2021-02-13 18:00",
                        "end_shift": "2021-02-13 20:00"
                    },
                    {
                        "shift_id": 6,
                        "shift_type": "OFF",
                        "start_shift": "2021-02-14",
                        "end_shift": "2021-02-14"
                    },
                    {
                        "shift_id": 7,
                        "shift_type": "MORNING",
                        "start_shift": "2021-02-15 10:00",
                        "end_shift": "2021-02-15 12:00"
                    },
                    {
                        "shift_id": 8,
                        "shift_type": "EVENING",
                        "start_shift": "2021-02-15 10:00",
                        "end_shift": "2021-02-15 12:00"
                    },
                    {
                        "shift_id": 9,
                        "shift_type": "EVENING",
                        "start_shift": "2021-02-16 16:00",
                        "end_shift": "2021-02-16 20:00"
                    },
                    {
                        "shift_id": 10,
                        "shift_type": "OFF",
                        "start_shift": "2021-02-12",
                        "end_shift": "2021-02-12"
                    }
                ]
            }
        ]
    };
    const dataEmpty = [
        {"name": "antonio ","id": 2},
        {"name": "DA BOSS","id": 3},
        {"name": "antonio","id": 4},
        {"name": "ana","id": 5},
        {"name": "Raquel","id": 6},
        {"name": "Belen","id": 7},
        {"name": "juan","id": 8},
        {"name": "rocio","id": 9},
        {"name": "Pedro","id": 10},
        {"name": "laura","id": 11},
        {"name": "andrea","id": 12},
        {"name": "alejandro","id": 13},
        {"name": "eladio","id": 14}
      ]
     
    const bodyCreate = 
        <> {dataEmpty.map(worker =>
            
            shfitType.map(type => {
                let cabecera =""
                if (type=="morning"){
                     cabecera =  <th className="table-dark" rowspan="2" id={worker.id} >{worker.id}, {worker.name}</th>;
                } 
                return (
                <tr>
                { cabecera }
                {week.map(day=> {
                    let datestr = day.toISOString().slice(0, 10);
                   return ( <>
                    <td data-shfitType={type} data-shift="startShift" data-date={datestr} data-id={worker.id}><input type="time" required/></td>
                    <td data-shfitType={type} data-shift="endtShift" data-date={datestr} data-id={worker.id}><input type="time" required/></td>
                    </>)
                  
                  })}
                  </tr>
                )}
                
            )
        )}
         </>;
 

                  const tdcollection = ()  => {
                    const tdcollection = ReactDOM.findDOMNode(document.getElementById("table-rota").getElementsByTagName("td"));
                    
                    console.log(tdcollection);

                  }
    // const [shift, setShift] = useState(""); 

    // const handleshift = (e) => {

    //     setShift(e.target.value);
    // }

    const body = data.data.map(worker =>
        <>
            <tr>
                <th rowspan="2" scope="rowgroup" className="table-warning">{worker.name}</th>
                {worker.shifts.map(shift =>
                    (shift.shift_type == "MORNING") ?
                        <td key={shift.shift_id} className="table-success" >

                            <p>{shift.start_shift.substr(11, 5)}~{shift.end_shift.substr(11, 5)}</p>

                        </td>
                        :
                        <td key={shift.shift_id} className="table-success" >

                            <p></p>

                        </td>
                )}
            </tr>

        </>


    )

    return (
        <>
        <div className="container row justify-content-around ">
            <input type="button" value="semana anterior"onClick={()=>{handleprev()}}  />
            <div className="text-center" >
                <h1>{week[0].getFullYear()}</h1>
                <h3>semana del {week[0].getDate()} de {month[week[0].getMonth()]} al {week[6].getDate()} de {month[week[6].getMonth()]}</h3>
            </div>
            <input type="button" value="semana proxima" onClick={()=>{handlenext()}}/>
        </div>
     
       
            <table id="table-rota" className="table table-sm table-bordered text-center my-3">
            {/* <caption> Rota </caption> */}
                <thead className="table-dark ">
                    <tr>
                        <th scope="col">#</th>
                        <th colspan="2" scope="col">Monday</th>
                        <th colspan="2" scope="col">Tuesday</th>
                        <th colspan="2" scope="col">Wednesday</th>
                        <th colspan="2" scope="col">Thursday</th>
                        <th colspan="2" scope="col">Friday</th>
                        <th colspan="2" scope="col">Saturday</th>
                        <th colspan="2" scope="col">Sunday</th>
                    </tr>
                    <tr>
                        <th scope="col"></th>
                        <th colspan="2" scope="col">{("0"+week[0].getDate()).slice(-2)}-{("0" + (week[0].getMonth() + 1)).slice(-2)}</th>
                        <th colspan="2" scope="col">{("0"+week[1].getDate()).slice(-2)}-{("0" + (week[1].getMonth() + 1)).slice(-2)}</th>
                        <th colspan="2" scope="col">{("0"+week[2].getDate()).slice(-2)}-{("0" + (week[2].getMonth() + 1)).slice(-2)}</th>
                        <th colspan="2" scope="col">{("0"+week[3].getDate()).slice(-2)}-{("0" + (week[3].getMonth() + 1)).slice(-2)}</th>
                        <th colspan="2" scope="col">{("0"+week[4].getDate()).slice(-2)}-{("0" + (week[4].getMonth() + 1)).slice(-2)}</th>
                        <th colspan="2" scope="col">{("0"+week[5].getDate()).slice(-2)}-{("0" + (week[5].getMonth() + 1)).slice(-2)}</th>
                        <th colspan="2" scope="col">{("0"+week[6].getDate()).slice(-2)}-{("0" + (week[6].getMonth() + 1)).slice(-2)}</th>
                   
                    </tr>
                </thead>
                <tbody className="table-hover">
                    {/* condicion, si hay datos{body} : {} */}
                   {/*  {body} */}
                    {bodyCreate}
                </tbody>
            </table>
            <button onClick={()=>{tdcollection()}}>tds</button>
        </>
    )
}

export default RotaMaker;