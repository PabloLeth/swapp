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
  const swappingFetch= (id) => {

    fetch(`${URLSHIFT}/${id}`,reqOpt)
    .then(response => response.json())
    .then(data => {swal(data.answer,{icon: "success",} )}
  
    ).catch(error => {
     
      console.log("ha habido un error:", error)
    });
  }
    const tdcolor = (swapping, shiftType, active)=>{
     
     if( active) {
      return swapping ? "td-pool" :` td-${shiftType}`;
     }
     if (!active){
       return swapping ? "td-pool":"td-off";
     }
     
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
                swappingFetch(e.id);
              
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
                       
                       
                         className={tdcolor(shift.swapping, shift.shiftType, shift.active) }
                        onClick={(e) => shiftToPool(e.currentTarget)}
                        
                        id={shift.id} 
                        key={shift.id} >
                    {shift.active? <> <p>{ ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                                       { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}</p>
                                       <b>{shift.branch}</b>
                                  </>
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
                        className={tdcolor(shift.swapping, shift.shiftType, shift.active) }
                        onClick={(e) => shiftToPool(e)}
                        id={shift.id} >
                          { shift.active?  
                          <> <p>{ ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                             { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}</p>
                             <b>{shift.branch}</b> 
                          </>
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