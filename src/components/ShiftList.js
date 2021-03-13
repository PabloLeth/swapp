function ShiftList({data}) {
 if (!data){
   return <p>loading...</p>
 }
  return (
    <>
    {
    data.map(({worker,branch, shiftType,startShift,endShift,job}) => {
  
      return(
      <div className="card text-center cardsize">
        <div className="card-body">
          <h5 className="card-title">{worker}</h5>
          <p className="card-text">{branch}</p>
          <p className="card-text">{shiftType}</p>
          <p className="card-text">{job}</p>
          <p className="card-text">{startShift.date.slice(11,16)}</p>
          <p className="card-text">{endShift.date.slice(11,16)}</p>
          <a href="#" className="btn btn-primary">tomarlo</a>
        </div>
      </div>
      )
    })
      }
    </>
  )
}
export default ShiftList;