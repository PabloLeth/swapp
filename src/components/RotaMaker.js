import { useState } from "react";
function RotaMaker() {
    // const week = ["#","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"];
    const workers = [{ name: "pablo", id: 1 }, { name: "ana", id: 2 }, { name: "pepe", id: 3 }];
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

    // const workersTable = data.data.map(worker =>
    //     <>
    //     <tr>
    //         <th rowspan="2" scope="rowgroup" className="table-warning">{worker.name}</th>
    //         {worker.shifts.map( )}
             
    //     </tr>
         
    //     </>
    // )
    const shifts = [{ worker_id: 1, }, {}, {}];
    const [shift, setShift] = useState("");

    const handleshift = (e) => {

        setShift(e.target.value);
    }

    const body = data.data.map(worker =>
        <>
        <tr>
            <th rowspan="2" scope="rowgroup" className="table-warning">{worker.name}</th>
            {worker.shifts.map(shift =>
                (shift.shift_type == "MORNING")?
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

            /*
             <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />
                   <input type="text" onChange={handleshift} placeholder={shift.start_shift.substr(11,5)} className="col-6" />
                <input type="text" onChange={handleshift} placeholder={shift.end_shift.substr(11,5)} className="col-6" />
            </td>
            <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />

            </td>
            <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />
            </td>
            <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />
            </td>
            <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />
            </td>
            <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />
            </td>
            <td className="table-success" >
                <input type="text" onChange={handleshift} className="col" />
            </td> */


       
    )

    return (

        <table className="table table-hover">

            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">{data.data[0].shifts[0].start_shift.substr(5, 5)}</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                </tr>
            </thead>
            <tbody>

                {body}



            </tbody>



        </table>
    )
}

export default RotaMaker;