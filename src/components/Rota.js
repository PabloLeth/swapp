import {useState} from 'react';
import ModalShift from './ModalShift';

function Rota(){
   // const week = ["#","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"];
   // const workers = [  { worker1 : {name : "pablo"}, worker2 : {name: "ana"}, worker3 : {name: "pape"}}  ];
 const [show, setShow] = useState(false);

 
    const workers = {
        worker1:[
            {week_id : 1, monday: "OFF", tuesday: "12:00 - 16:00", wednesday:"OFF",thursday:"10:00 -16:00", friday: "17:00 - 22:00", saturday:"17:00 - 23:00",sunday:"10:00 - 20:00"},
            {week_id : 2, monday: "12:00 - 16:00", tuesday: "17:00 - 22:00", wednesday:"OFF",thursday:"12:00 - 16:00", friday: "10:00 - 20:00", saturday:"17:00 - 22:00",sunday:"10:00 -16:00"},
            {week_id : 3, monday: "17:00 - 22:00", tuesday: "12:00 - 16:00", wednesday:"17:00 - 22:00",thursday:"10:00 -16:00", friday: "OFF", saturday:"10:00 -16:00",sunday:"OFF"}
        ],

    }
    
        const shiftToPool = () =>{
            alert("aqui mandará el detalle del turno con boton empezar proceso de cambio");
           // setShow(!show);
           
         //  if (confirm(` confirma que desea deshacerse de este turno ${shift.id}, ${shift.date} `)){
         //       functionfetchingtoswapping();
         //       alert("perfecto, tu turno ha ido a la piscina de turnos");
         //   }
           //aqui ira una funcion con un fetch para cambiar swapping a true
        }
const body = workers.worker1.map(worker =>
    <tr>
        <th scope ="row" className="table-warning">{worker.week_id}</th>
        <td className="table-success" onClick={() => shiftToPool()} >{worker.monday}</td>
        <td className="table-success" onClick={() => shiftToPool()}>{worker.tuesday}</td>
        <td className="table-success" onClick={() => shiftToPool()}>{worker.wednesday}</td> 
        <td className="table-success" onClick={() => shiftToPool()}>{worker.thursday}</td> 
        <td className="table-success" onClick={() => shiftToPool()}>{worker.friday}</td> 
        <td className="table-success" onClick={() => shiftToPool()}>{worker.saturday}</td> 
        <td className="table-success" onClick={() => shiftToPool()}>{worker.sunday}</td> 
    </tr>
    )
    
    return (
        <>
       
        <table className="table table-hover">
            
            <thead className="table-dark">
            <tr>
                <th scope ="col">#</th>
                <th scope ="col">Monday</th>
                <th scope ="col">Tuesday</th>
                <th scope ="col">Wednesday</th>
                <th scope ="col">Thursday</th>
                <th scope ="col">Friday</th>
                <th scope ="col">Saturday</th>
                <th scope ="col">Sunday</th>
            </tr>
            </thead>
            <tbody>
            {body}

            </tbody>
           
           
           
        </table>
        </>
    )
}

export default Rota;