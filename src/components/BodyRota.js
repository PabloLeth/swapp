import swal from 'sweetalert';
function BodyRota({ data, week }) {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  const shiftType = ["morning", "evening"];
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
       return "td-off";
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
                /* meter un fetch a http://localhost:8000/shift/swapping/${e.target.id} */
                swappingFetch(e.id);
              
            } else {
              swal("you will work this shift then!");
            }
          });
         
   
    }
    return(
        <>
          {shiftType.map(type =>{
          return  <tr>
              <th className="table-dark">{capitalize(type)}</th>
            {week.map(day =>{
              let datestr = day.toISOString().slice(0, 10);
           console.log("datestr",datestr);
              let theShift =  data.find(shift => shift.shiftType == type && new Date ((new Date(shift.date.date).getTime()) + 120*60*1000+1).toISOString().slice(0, 10) == datestr);
              console.log(theShift);
           if (theShift) {  
             console.log(theShift);
             return (<td
           
                className={tdcolor(theShift.swapping, theShift.shiftType, theShift.active) }
               onClick={(e) => shiftToPool(e.currentTarget)}
               id={theShift.id} 
               key={theShift.id} >
           {theShift.active? <> <p>{ ("0" + (new Date(theShift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(theShift.startShift.date).getMinutes())).slice(-2)} /
                              { ("0" + (new Date(theShift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(theShift.endShift.date).getMinutes())).slice(-2)}</p>
                              <b>{theShift.branch}</b>
                              </>
                 :  <b>OFF</b> }
   
           </td>)
}

            })}
            </tr>

          })}
        </>
    )
}
    export default BodyRota;