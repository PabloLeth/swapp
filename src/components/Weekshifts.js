import React, { useState, useContext } from 'react';
function Weekshifts({ worker, week, setShifts, shifts }) {
    if (!worker) {
        return <p>loading...</p>
    }
    const shfitType = ["1", "2"]; /* necesito cambiarlo por 0 y 1 para el back */

    const updateWorkerInDataResponse = (newWorker) => {
        return shifts.map(worker => worker.id == newWorker.id ? newWorker : worker)
    }
    const updateShiftInWorker = (existingShift, workerObj) => {

        workerObj.shifts = workerObj.shifts.map(shift => {
            let found = shift.shiftType == existingShift.shiftType
                && existingShift.date
                && typeof shift.date == "string"
                && shift.date.substring(0, 10) == existingShift.date.substring(0, 10)
                ;

            return found ? existingShift : shift
        })

        return workerObj
    }
    const existAnyShift = (workerObj, type, datestr) => {
        let existingShift = workerObj.shifts.find(shift =>
            shift.shiftType == type
            && typeof shift.date == "string"
            && shift.date.substring(0, 10) == datestr);
        return existingShift;
    }
    const existEndShift = (workerObj, type, datestr) => {
        let existingEndShift = workerObj.shifts.find(shift =>
            shift.shiftType == type
            && typeof shift.endShift == "string"
            && shift.endShift.substring(0, 10) == datestr);
        return existingEndShift;
    }
    const existStartShift = (workerObj, type, datestr) => {
        let existingStartShift = workerObj.shifts?.find(shift =>
            shift.shiftType == type
            && typeof shift.date == "string"
            && shift.date.substring(0, 10) == datestr);
        return existingStartShift;
    }

    const toggleInput = (e, type, datestr, wid) => {
        let inputsTarget = e.currentTarget.firstChild;
        console.log(inputsTarget);
        let workerObj = shifts.find(w => { return w.id == wid });
        let existingShift = existAnyShift(workerObj, type, datestr);

        if (existingShift && existingShift.active == false) {

            existingShift = { shiftType: type, date: datestr, startShift: (datestr + " " + inputsTarget.firstChild.value), endShift: (datestr + " " + inputsTarget.lastChild.value), active: true };


            workerObj = updateShiftInWorker(existingShift, workerObj);
        }
        else if (existingShift) {

            existingShift = { shiftType: type, date: datestr, active: false };

            workerObj = updateShiftInWorker(existingShift, workerObj);

        } else {
            workerObj.shifts.push({
                date: datestr,
                shiftType: type,
                active: false
            })
        }
        let newDataResponse = updateWorkerInDataResponse(workerObj)

        setShifts(newDataResponse);


    }


    const getStartValue = (e, type, datestr, wid) => {

        if (!e.target.value) { return; }

        let workerObj = shifts.find(w => { return w.id == wid });
        let existingEndShift = existEndShift(workerObj, type, datestr);
        let existingStartShift = existStartShift(workerObj, type, datestr);
        if (existingEndShift) {

            existingEndShift = { ...existingEndShift, startShift: (datestr + " " + e.target.value), active: true }
            workerObj = updateShiftInWorker(existingEndShift, workerObj);

        } else if (existingStartShift) {
            existingStartShift = { ...existingStartShift, startShift: (datestr + " " + e.target.value) }
            workerObj = updateShiftInWorker(existingStartShift, workerObj);

        } else {
            workerObj.shifts.push({
                date: datestr,
                shiftType: type,
                startShift: (datestr + " " + e.target.value),
            })
        }
        let newDataResponse = updateWorkerInDataResponse(workerObj)

        setShifts(newDataResponse);


    }

    const getEndValue = (e, type, datestr, wid) => {

        if (!e.target.value) {
            return;
        }

        let workerObj = shifts.find(w => { return w.id == wid });

        let existingEndShift = existEndShift(workerObj, type, datestr);
        let existingStartShift = existStartShift(workerObj, type, datestr);

        if (existingStartShift) {

            existingStartShift = { ...existingStartShift, endShift: (datestr + " " + e.target.value), active: true }
            workerObj = updateShiftInWorker(existingStartShift, workerObj);
        } else if (existingEndShift) {
            existingEndShift = { ...existingEndShift, endShift: (datestr + " " + e.target.value) }
            workerObj = updateShiftInWorker(existingEndShift, workerObj);


        } else {
            workerObj.shifts.push({
                shiftType: type,
                endShift: (datestr + " " + e.target.value)
            })
        }
        let newDataResponse = updateWorkerInDataResponse(workerObj)
        // console.log({workerObj, newDataResponse});
        setShifts(newDataResponse);


    }


    return (
        <>
            {shfitType.map((type) => {
                let cabecera = "";
                let wid = worker.id;

                if (type == "1") { /* para poner cabecera con nombre en mañana y tarde por rowspan */
                    cabecera = <th className="table-dark" rowspan="2" id={worker.id} >{worker.id}, {worker.worker}</th>;
                }
                return (
                    <tr>

                        { cabecera}
                        {week.map((day, index) => {
                            let datestr = day.toISOString().slice(0, 10);


                            let conditionShift = worker.shifts.find(shift => shift.shiftType == type && shift.id && new Date ((new Date(shift.date.date).getTime()) + 120*60*1000+1).toISOString().slice(0, 10) == datestr);
                            let conditionActive = worker.shifts.find(shift => shift.shiftType == type && typeof shift.date == "string" && shift.date.substring(0, 10) == datestr);

                            
                            if (conditionShift) {
                                
                                if (conditionShift.active === true) {
                                    return (<>

                                        <td data-shiftid={conditionShift.id} className={type == "1" ? "td-morning" : type == "2" ? "td-evening" : ""}>
                                          
                                            {("0" + (new Date(conditionShift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift.startShift.date).getMinutes())).slice(-2)} /
                                            {("0" + (new Date(conditionShift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(conditionShift.endShift.date).getMinutes())).slice(-2)}

                                        </td>
                                    </>) 
                                }
                                if (conditionShift.active === false) {
                                    return (

                                        <td data-shiftid={conditionShift.id} className="td-off">
                                            <div className="">
                                                <b>OFF </b>
                                            </div>
                                        </td>
                                    )
                                } 
                            }else {

                                    return (<>
                                        <td className={type == "1" ? "td-morning" : type == "2" ? "td-evening" : ""} data-shiftType={type} data-date={datestr} data-wid={wid} id={index} onDoubleClick={(e) => { toggleInput(e, type, datestr, wid) }}>

                                       

                                            <div className={conditionActive ? (conditionActive.active === false ? "hide" : "") : ""}>
                                                <input data-shift="startShift" type="time" required onBlur={(e) => { getStartValue(e, type, datestr, wid) }} />
                                                <input data-shift="endShift" type="time" required onBlur={(e) => { getEndValue(e, type, datestr, wid) }} />
                                            </div >
                                            <div className={conditionActive ? conditionActive.active === false ? "" : "hide" : "hide"}>
                                                <b>OFF</b>
                                            </div>


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
