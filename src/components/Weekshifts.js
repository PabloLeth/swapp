import React, { useState, useContext } from 'react';

function Weekshifts({worker, week, setShifts, shifts}) {
     //console.log("worker ", worker);
     console.log(" shifts", shifts);

    const shfitType = ["morning", "evening"]; /* necesito cambiarlo por 0 y 1 para el back */
    const getValue= (e, startOrEnd, type, datestr, wid, index) =>{
        console.log("target:",e.target);
        console.log(e.target);
        console.log("target.value:", e.target.value);
        let jsondata = {
          [(e.target.getAttribute("data-shift"))]: (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value), /* actual shift data to go either in start or end hift */
          shiftType : e.target.parentNode.getAttribute("data-shiftType"), /* morning or evening */
          date : e.target.parentNode.getAttribute("data-date"),
          worker : e.target.parentNode.getAttribute("data-wid"), /* worker id */
        }  
        worker.shifts.push({
            shiftType: type,
            startShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value)
        })
     
    //   console.log("object?:",jsondata);
      /* necesita cambiar solo en el que le corresponda */
    //   setShifts(prev => [...prev,{jsondata}]);
  
    //   setShifts(prev => ({...prev,[ worker.worker ]: jsondata }));
    //  setShifts(prev => ({[ worker.worker ]: {...prev, jsondata} }));
    
    //   setTheObject(prev => ({...prev, [name]: value }));
    }
    const updateWorkerInDataResponse = (allShifts, newWorker) =>{
        return allShifts.map( worker=> worker.id==newWorker.id?newWorker:worker)
    }
const updateShiftInWorker = (newShift , oldWorker) =>{
    oldWorker.shifts = oldWorker.shifts.map( shift =>{
       let found = shift.shiftType == newShift.shiftType && typeof shift.startShift == "string" && shift.startShift.substring(0, 10) == newShift.startShift.substring(0, 10);
    console.log(found); 
       return found?newShift : shift
    })
    console.log(oldWorker);
    return oldWorker
}
    const getStartValue= (e, startOrEnd, type, datestr, wid, index) =>{
        console.log("target:",e.target);
        console.log(e.target);
        console.log("target.value:", e.target.value);
        if(!e.target.value) {
            return;
        }
        // let jsondata = {
        //   [(e.target.getAttribute("data-shift"))]: (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value), /* actual shift data to go either in start or end hift */
        //   shiftType : e.target.parentNode.getAttribute("data-shiftType"), /* morning or evening */
        //   date : e.target.parentNode.getAttribute("data-date"),
        //   worker : e.target.parentNode.getAttribute("data-wid"), /* worker id */
        // } 
        const work = shifts.find(w =>{return w.id=worker.id })
        let alreadyShift = work.shifts?.find(shift => shift.shiftType == type && typeof shift.endShift =="string" && shift.endShift.substring(0, 10) == datestr); 
        if(alreadyShift){

            alreadyShift = {...alreadyShift, startShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value) }
            console.log("alreadyshift",alreadyShift);
            work = updateShiftInWorker(alreadyShift, work);

        }else{
            work.shifts.push({
                shiftType: type,
                startShift:  (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value),
            })
        }
        let newDataResponse = updateWorkerInDataResponse(shifts, work)
        console.log({work, newDataResponse});
        setShifts(newDataResponse);
     
    //   console.log("object?:",jsondata);
      /* necesita cambiar solo en el que le corresponda */
    //   setShifts(prev => [...prev,{jsondata}]);
  
    //   setShifts(prev => ({...prev,[ worker.worker ]: jsondata }));
    //  setShifts(prev => ({[ worker.worker ]: {...prev, jsondata} }));
    
    //   setTheObject(prev => ({...prev, [name]: value }));
    }

    const getEndValue= (e, startOrEnd, type, datestr, wid, index) =>{
        console.log("target:",e.target);
        console.log(e.target);
        console.log("target.value:", e.target.value);
        if(!e.target.value) {
            return;
        }
        // let jsondata = {
        //   [(e.target.getAttribute("data-shift"))]: (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value), /* actual shift data to go either in start or end hift */
        //   shiftType : e.target.parentNode.getAttribute("data-shiftType"), /* morning or evening */
        //   date : e.target.parentNode.getAttribute("data-date"),
        //   worker : e.target.parentNode.getAttribute("data-wid"), /* worker id */
        // }  
        let work = shifts.find(w =>{return w.id=worker.id })
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
     
    //   console.log("object?:",jsondata);
      /* necesita cambiar solo en el que le corresponda */
    //   setShifts(prev => [...prev,{jsondata}]);
  
    //   setShifts(prev => ({...prev,[ worker.worker ]: jsondata }));
    //  setShifts(prev => ({[ worker.worker ]: {...prev, jsondata} }));
    
    //   setTheObject(prev => ({...prev, [name]: value }));
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
                            if (worker.shifts) {
                                    /* si tiene shifts en los datos que el back nos devuelve: */
                                
                               
                                let conditionShift = worker.shifts.filter(shift => shift.shiftType == type && new Date(shift.startShift.date).toISOString().slice(0, 10) == datestr);
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
                                        <td data-shiftType={type} data-date={datestr} data-wid={wid} id={index}>
                                            <input data-shift="startShift" type="time" required onBlur={(e ) => { getStartValue(e, 'startShift', type, datestr, wid, index) }} />

                                            <input data-shift="endShift" type="time" required onBlur={(e) => { getEndValue(e, 'endShift', type, datestr, wid, index) }} />
 
                                        </td>
                                    </>)
                                }
                            } else {

                                return (<>
                                    <td data-shiftType={type} data-date={datestr} data-wid={wid} id={index}>
                                        <input data-shift="startShift" type="time" required onBlur={(e) => {getStartValue(e, 'startShift', type, datestr, wid, index) }} />

                                        <input data-shift="endShift" type="time" required onBlur={(e) => {getEndValue(e, 'endShift', type, datestr, wid, index) }} />
                                        {/* {
                            setShifts(shifts => [...shifts,{date : datestr , shiftType : type, startShift : null, endShift : null, worker : worker.id }])
                         }  //esto genera un error porque se actualiza con cada set por lo que comienza de nuevo generando un bucle infinito
                            //debo crear el estado inicial del useState y despues acceder a el para hacer cambios
                          */}
                              
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
