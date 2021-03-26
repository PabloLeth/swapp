import React, { useState, useContext } from 'react';
function Weekshifts({worker, week, setShifts, shifts}) {
    const [active, setActive] = useState(true);
    const toggleInput = (e) =>{
        console.log("change");
      
    }
    

    const shfitType = ["morning", "evening"]; /* necesito cambiarlo por 0 y 1 para el back */
 
    const updateWorkerInDataResponse = (allShifts, newWorker) =>{
        return allShifts.map( worker=> worker.id==newWorker.id?newWorker:worker)
    }
const updateShiftInWorker = (alreadyShift , workerObj) =>{
    workerObj.shifts = workerObj.shifts.map( shift =>{
       let found = shift.shiftType == alreadyShift.shiftType && typeof shift.startShift == "string" && shift.startShift.substring(0, 10) == alreadyShift.startShift.substring(0, 10);
  
       return found ? alreadyShift : shift
    })

    return workerObj
}
    const getStartValue= (e, startOrEnd, type, datestr, wid, index) =>{
      
        console.log("getStartValue.wid",wid)
        if(!e.target.value) {
            return;
        }
        
        let workerObj = shifts.find(w =>{return w.id==wid }); 
     
        let alreadyShift = workerObj.shifts.find(shift => shift.shiftType == type && typeof shift.endShift =="string" && shift.endShift.substring(0, 10) == datestr); 
        if(alreadyShift){

            alreadyShift = {...alreadyShift, startShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value) }
            
            workerObj = updateShiftInWorker(alreadyShift, workerObj);

        }else{
            workerObj.shifts.push({
                date : e.target.parentNode.getAttribute("data-date"),
                shiftType: type,
                startShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value),
            })
        }
        let newDataResponse = updateWorkerInDataResponse(shifts, workerObj)
        
        setShifts(newDataResponse);
     
   
    }

    const getEndValue= (e, startOrEnd, type, datestr, wid, index) =>{
       
        if(!e.target.value) {
            return;
        }
        
        let work = shifts.find(w =>{return w.id==wid })
        let alreadyShift = work.shifts?.find(shift => shift.shiftType == type && typeof shift.startShift == "string" && shift.startShift.substring(0, 10) == datestr); 
        if(alreadyShift){

            alreadyShift = {...alreadyShift, endShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value) }
            console.log("alreadyshift",alreadyShift);
            work = updateShiftInWorker(alreadyShift, work);
            console.log(work);
        }else{
            work.shifts.push({
                shiftType: type,
                endShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value)
            })
        }
        let newDataResponse = updateWorkerInDataResponse(shifts, work)
        console.log({work, newDataResponse});
        setShifts(newDataResponse);
     
  
    }
 

    return (
        <>
            {shfitType.map((type,index) => {
                let cabecera = "";
                let wid = worker.id;
             
                if (type == "morning") { /* para poner cabecera con nombre en mañana y tarde por rowspan */
                    cabecera = <th className="table-dark" rowspan="2" id={worker.id} >{worker.id}, {worker.worker}</th>;
                }
                return (
                    <tr> 
                       
                        { cabecera}
                        {week.map((day, index) => {
                            let datestr = day.toISOString().slice(0, 10);
                         
                                    /* si tiene shifts en los datos que el back nos devuelve: */
                                
                               
                                let conditionShift = worker.shifts.filter(shift => shift.shiftType == type && shift.startShift && new Date(shift.startShift.date).toISOString().slice(0, 10) == datestr);
                                    /* condicion para saber si hay datos de la base de datos para rango de (mañ/tard) que estemos y la fecha en el trabajador en el que estamos */

                                if (conditionShift[0]) {
                                    
                                    return (<>
                                        <td data-shiftid={conditionShift.id}>
                                                {/* quizas mejor en un <i> o algo asi */}
                                            {("0" + (new Date(conditionShift[0].startShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift[0].startShift.date).getMinutes())).slice(-2)} /
                                            {("0" + (new Date(conditionShift[0].endShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift[0].endShift.date).getMinutes())).slice(-2)}

                                        </td>
                                    </>)

                                } else {
                                            /* si no lo encuentra pintará un input */
                                    return (<>
                                        <td data-shiftType={type} data-date={datestr} data-wid={wid} id={index} onDoubleClick={(e)=>{toggleInput(e)}}>
                                            <div className="">
                                                <input data-shift="startShift"type="time"required onBlur={(e) => { getStartValue(e, 'startShift', type, datestr, wid, index) }} />
                                                <input data-shift="endShift" type="time" required onBlur={(e) => { getEndValue(e, 'endShift', type, datestr, wid, index) }} />
                                            </div >
                                            {/* <div className="">
                                                <p>OFF</p>
                                            </div> */}
                                        </td>
                                    </>)
                                }
                          
                        })}
                    </tr>
                )
            }

            )
            }
        </>
    );
}

export default Weekshifts;
