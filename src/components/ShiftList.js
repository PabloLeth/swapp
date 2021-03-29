import swal from 'sweetalert';
function ShiftList({ data}) {
  if (!data) {
    return <p>loading...</p>
  }
  let token = localStorage.getItem("token");
  const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const URLSHIFT = "http://localhost:8000/shift/swapping";
  
  const reqOpt = {
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json',
               Authorization : `Bearer ${token}`
  },
    body: JSON.stringify({swapping : 0 })
   
};
const swappingFetch = (id) =>{
  fetch(`${URLSHIFT}/${id}`,reqOpt)
  .then(response => response.json())
  .then(data => {
    console.log(data.answer);
    // dispatch({ data, error: null, isLoading: false }); necesito filtrar la data para hacer un pop por el id
  }
  ).catch(error => {
    console.log("ha habido un error:", error)
  });
}
 const takeShift= (id) => {
   
    swal({
      title: "Are you a 100% sure?",
      text: "Once you take the shift, you will have to call your boss to explain it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willSend) => {
      if (willSend) {
          
          swappingFetch(id);
        swal("Boom! thats your shift now!", {
          icon: "success",
        });
      } else {
        swal("are you still looking for more work?!");
      }
    });
  }
  return (
    <>
      <div className="row">
       

          {
            data.map(({ date, worker, branch, shiftType, startShift, endShift, job, id }) => {

              return (
                <div className="">
                <div className="card text-center mx-2 my-3 ">
                  <div className= {`card-body ${shiftType == "morning" ? " bg-warning": "bg-primary" }`}>
                    {/* <h3 className="card-title">id: {id}</h3> */}
                    {/* <h4 className="card-title">turno de: {job}</h4> */}
                    <h3 className="card-text"><b>{week[new Date(startShift.date).getDay()]}</b></h3>
                    <p className="card-text"><b>{startShift.date.slice(5, 10)}</b></p>

                    <h4 className="card-text">{shiftType}</h4>
                    <h5 className="card-text"> {branch}</h5>
                    <p className="card-text">from: <b>{startShift.date.slice(11, 16)} - {endShift.date.slice(11, 16)}</b></p>

                    <p className="card-text">Change with: {worker}</p>
                    <a href="#" className="btn btn-primary"id={id} onClick={()=>takeShift(id)}>me lo quedo</a>
                  </div>
                </div>
                </div>
              )
            })
          }
        </div>
 
    </>
  )
}
export default ShiftList;


