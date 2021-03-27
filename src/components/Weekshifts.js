import React, { useState, useContext } from 'react';
function Weekshifts({worker, week, setShifts, shifts}) {

    const shfitType = ["morning", "evening"]; /* necesito cambiarlo por 0 y 1 para el back */
 
    const updateWorkerInDataResponse = (shifts, newWorker) =>{
        return shifts.map( worker=> worker.id==newWorker.id?newWorker:worker)
    }
const updateShiftInWorker = (existingShift , workerObj) =>{
   
    workerObj.shifts = workerObj.shifts.map( shift =>{
       let found = shift.shiftType == existingShift.shiftType
                && existingShift.date
                && typeof shift.date == "string"
                && shift.date.substring(0, 10) == existingShift.date.substring(0, 10) 
                ;
        console.log(found);
       return found ? existingShift : shift
    })

    return workerObj
}
const existAnyShift = (workerObj,type,datestr) =>{
    let existingShift = workerObj.shifts.find(shift => 
        shift.shiftType == type
     && typeof shift.date =="string" 
     && shift.date.substring(0, 10) == datestr);
     return existingShift;
}
const existEndShift = (workerObj,type,datestr) =>{
    let existingEndShift = workerObj.shifts.find(shift => 
        shift.shiftType == type 
        && typeof shift.endShift =="string" 
        && shift.endShift.substring(0, 10) == datestr);
         return existingEndShift;
}
    const existStartShift = (workerObj,type,datestr) =>{
        let existingStartShift = workerObj.shifts?.find(shift => 
            shift.shiftType == type
             && typeof shift.startShift == "string" 
             && shift.startShift.substring(0, 10) == datestr); 
        return existingStartShift;
    }

    const toggleInput = (e, type, datestr, wid) =>{
       
            let workerObj = shifts.find(w =>{return w.id == wid }); 
            let existingShift = existAnyShift(workerObj,type,datestr);
                
            if (existingShift && existingShift.active == false){
                //introducir aqui el codigo para grabar los datos que existan en los inputs de haberlos
                existingShift = {shiftType: type, date : datestr, startShift: (datestr +" "+ e.target.children[0].value), endShift: (datestr +" "+ e.target.children[1].value), active : true };
                console.log("esta Off",e.target);
                                
                workerObj = updateShiftInWorker(existingShift, workerObj);
            }
           else if(existingShift){
               
                existingShift = {shiftType: type, date : datestr, active : false };
                
                workerObj = updateShiftInWorker(existingShift, workerObj);
    
            }else{
                workerObj.shifts.push({
                    date : datestr,
                    shiftType: type,
                    active : false
                })
            }
            let newDataResponse = updateWorkerInDataResponse(shifts, workerObj)
            
            setShifts(newDataResponse);
         

    }
    

    const getStartValue= (e, type, datestr, wid) =>{
      
        if(!e.target.value){return;}
        
        let workerObj = shifts.find(w =>{return w.id==wid }); 
        let existingEndShift = existEndShift(workerObj,type,datestr);
        let existingStartShift = existStartShift(workerObj,type,datestr);
        if(existingEndShift){

            existingEndShift = {...existingEndShift, startShift: (datestr +" "+ e.target.value), active : true }
            workerObj = updateShiftInWorker(existingEndShift, workerObj);
          
        }else if (existingStartShift){
            existingStartShift = {...existingStartShift, startShift:  (datestr +" "+ e.target.value) }
            workerObj = updateShiftInWorker(existingStartShift, workerObj);
          
            } else{
            workerObj.shifts.push({
                date : datestr,
                shiftType: type,
                startShift: (datestr+" "+ e.target.value),
            })
        }
        let newDataResponse = updateWorkerInDataResponse(shifts, workerObj)
        
        setShifts(newDataResponse);
     
   
    }

    const getEndValue= (e, type, datestr, wid) =>{
       
        if(!e.target.value) {
            return;
        }
        
        let workerObj = shifts.find(w =>{return w.id==wid });

        let existingEndShift = existEndShift(workerObj,type,datestr);
        let existingStartShift = existStartShift(workerObj,type, datestr);

        if(existingStartShift){

            existingStartShift = {...existingStartShift, endShift:  (datestr +" "+ e.target.value), active : true }
            workerObj = updateShiftInWorker(existingStartShift, workerObj);
        }else if (existingEndShift){
            existingEndShift = {...existingEndShift, endShift:  (datestr +" "+ e.target.value) }
            workerObj = updateShiftInWorker(existingEndShift, workerObj);
           console.log("pasa por aqui?");
            
        }else{
            workerObj.shifts.push({
                shiftType: type,
                endShift:  (datestr +" "+ e.target.value)
            })
        }
        let newDataResponse = updateWorkerInDataResponse(shifts, workerObj)
        // console.log({workerObj, newDataResponse});
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
                                              
                                            {("0" + (new Date(conditionShift[0].startShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift[0].startShift.date).getMinutes())).slice(-2)} /
                                            {("0" + (new Date(conditionShift[0].endShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift[0].endShift.date).getMinutes())).slice(-2)}

                                        </td>
                                    </>)

                                } else {
                                           
                                    return (<>
                                        <td data-shiftType={type} data-date={datestr} data-wid={wid} id={index} onDoubleClick={(e)=>{toggleInput(e, type, datestr, wid)}}>
                                            {/* <div className=""> */}
                                                <input data-shift="startShift"type="time"required onBlur={(e) => { getStartValue(e, type, datestr, wid) }} />
                                                <input data-shift="endShift" type="time" required onBlur={(e) => { getEndValue(e, type, datestr, wid) }} />
                                            {/* </div > */}
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
