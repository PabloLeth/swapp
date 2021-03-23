import swal from 'sweetalert';
function BodyRota({ data }) {
    if (!data) {
      return <p>loading...</p>
    }
    let token = localStorage.getItem("token");

    const URLSHIFT = "http://localhost:8000/shift/swapping";
    
    const reqOpt = {
      method: 'PUT',
      headers: { 'Content-Type' : 'application/json',
                 Authorization : `Bearer ${token}`
    },
      body: JSON.stringify({swapping : 1 })
     
  };
  const swappingFetch= (e) => {
 
    fetch(`${URLSHIFT}/${e.target.id}`,reqOpt)
    .then(response => response.json())
    .then(data => {console.log(data.answer)}
  
    ).catch(error => {
     
      console.log("ha habido un error:", error)
    });
  }
    const shiftToPool = (e) => {
       
        swal({
            title: "Are you sure?",
            text: "Once you send it to the pool, you will have to call your boss and explain it to him to recover it!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willSend) => {
            if (willSend) {
                /* meter un fetch a http://localhost:8000/shift/swapping/${e.target.id} */
                swappingFetch(e);
              swal("Boom! way to the pool it goes!", {
                icon: "success",
              });
            } else {
              swal("you will work this shift then!");
            }
          });
       // e.target.id
        // setShow(!show);

        //  if (confirm(` confirma que desea deshacerse de este turno ${shift.id}, ${shift.date} `)){
        //       functionfetchingtoswapping();
        //       alert("perfecto, tu turno ha ido a la piscina de turnos");
        //   }
        //aqui ira una funcion con un fetch para cambiar swapping a true
    }
    return(
        <>
        <tr>
            <th className="table-dark">Morning</th>
            {data.map(shift => {

                if (shift.shiftType == "morning") {
                    return (<td
                       
                       
                         className={shift.swapping ? "table-warning" : "table-success" }
                        onClick={(e) => shiftToPool(e)}
                        id={shift.id} 
                        key={shift.id} >
                        { ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                        { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}

                    </td>)
                }
            }

            )}
        </tr>
        <tr>
            <th className="table-dark">Evening</th>
            {data.map(shift => {

                if (shift.shiftType == "evening") {
                    return (<td
                        className={shift.swapping ? "table-warning" : "table-success" }
                        onClick={(e) => shiftToPool(e)}
                        id={shift.id} >
                        { ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                        { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}

                    </td>)
                }
            }

            )}
        </tr>
        </>
    )
}
    export default BodyRota;