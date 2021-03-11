function Card (props){

    return(
        <>
       <div className="card text-center cardsize">
  <div className="card-body">
    <h5 className="card-title">{props.worker|| "no data"}</h5>
    <p className="card-text">{props.branch}</p>
    <p className="card-text">{props.shiftType}</p>
    {/* <p className="card-text">{props.startShift.date}</p>
    <p className="card-text">{props.endShift.date}</p>
    */}
    <a href="#" className="btn btn-primary">tomarlo</a>
  </div>
</div>
        </>
    )
}

export default Card;