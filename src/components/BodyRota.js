import swal from 'sweetalert';
function BodyRota({ data }) {
    if (!data) {
      return <p>loading...</p>
    }
    if(data){
      console.log(data);
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
    .then(data => {swal(data.answer)}
  
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
   
    }
    return(
        <>
        <tr>
            <th className="table-dark">Morning</th>
            {data.length === 0? <td colspan="7"> <h3>  No Rota Yet</h3></td> :"" }
            {data.map(shift => {

                if (shift.shiftType == "morning") {
                    return (<td
                       
                       
                         className={shift.swapping ? "td-pool" : "td-morning " }
                        onClick={(e) => shiftToPool(e)}
                        id={shift.id} 
                        key={shift.id} >
                    {shift.active?  <p>{ ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                                       { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}</p>
                          :  <b>OFF</b> }

                    </td>)
                }
            }

            )}
        </tr>
        <tr>
            <th className="table-dark">Evening</th>
            {data.length === 0? <td colspan="7"> <h3>  No Rota Yet</h3></td> : "" }
            {data.map(shift => {

                if (shift.shiftType == "evening") {
                    return (<td
                        className={shift.swapping ? "td-pool" : "td-evening " }
                        onClick={(e) => shiftToPool(e)}
                        id={shift.id} >
                          { shift.active?  
                          <p>{ ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                             { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}</p>
                          : <b>OFF</b> }
                   
                    </td>)
                }
            }

            )}
        </tr>
        </>
    )
}
    export default BodyRota;