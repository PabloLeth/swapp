import React, { useState, useContext } from 'react';

function Weekshifts({worker, week, setShifts}) {

    const shfitType = ["morning", "evening"]; /* necesito cambiarlo por 0 y 1 para el back */
    const getValue= (e) =>{
        console.log("target:",e.target);
        console.log(e.target);
        console.log("target.value:", e.target.value);
        let jsondata = {
          [(e.target.getAttribute("data-shift"))]: (e.target.parentNode.getAttribute("data-date") +" "+ e.target.value), /* actual shift data to go either in start or end hift */
          shiftType : e.target.parentNode.getAttribute("data-shiftType"), /* morning or evening */
          date : e.target.parentNode.getAttribute("data-date"),
          worker : e.target.parentNode.getAttribute("data-wid"), /* worker id */
          
      }
      console.log("object?:",jsondata);
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

                                
                               
                                let conditionShift = worker.shifts.filter(shift => shift.shiftType == type && new Date(shift.startShift.date).toISOString().slice(0, 10) == datestr);


                                if (conditionShift[0]) {
                                    
                                    return (<>
                                        <td data-shiftid={conditionShift.id}>

                                            {("0" + (new Date(conditionShift[0].startShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift[0].startShift.date).getMinutes())).slice(-2)} /
                                            {("0" + (new Date(conditionShift[0].endShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift[0].endShift.date).getMinutes())).slice(-2)}

                                        </td>
                                    </>)

                                } else {

                                    return (<>
                                        <td data-shiftType={type} data-date={datestr} data-wid={wid} id={index}>
                                            <input data-shift="startShift" type="time" required onChange={(e) => { getValue(e) }} />

                                            <input data-shift="endShift" type="time" required onChange={(e) => { getValue(e) }} />

                                        </td>
                                    </>)
                                }
                            } else {

                                return (<>
                                    <td data-shiftType={type} data-date={datestr} data-wid={wid} id={index}>
                                        <input data-shift="startShift" type="time" required onChange={(e) => { getValue(e) }} />

                                        <input data-shift="endShift" type="time" required onChange={(e) => { getValue(e) }} />
                                        {/* {
                            setShifts(shifts => [...shifts,{date : datestr , shiftType : type, startShift : null, endShift : null, worker : worker }])
                         } */}

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
