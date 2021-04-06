import swal from 'sweetalert';
function BodyRota({ data, week, check, setCheck }) {
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  const shiftType = ["morning", "evening"];
  if (!data) {
    return <p>loading...</p>
  }
  if (data) {

  }
  let token = localStorage.getItem("token");

  const URLSHIFT = "http://localhost:8000/shift/swapping";

  const reqOpt = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ swapping: 1 })

  };
  const swappingFetch = (id) => {

    fetch(`${URLSHIFT}/${id}`, reqOpt)
      .then(response => {

        if (response.status == 403) {

          response.json()
            .then(data => { swal(data.answer, { icon: "error", }) })
        }
        if (response.ok) {

          response.json()
            .then(data => {
              swal(data.answer, { icon: "success", });
              setCheck(!check);
            })

            .catch(error => {

              console.log("ha habido un error:", error)
            });
        }
      })
  }

  const tdcolor = (swapping, shiftType, active) => {

    if (active) {
      return swapping ? "td-pool" : ` td-${shiftType}`;
    }
    if (!active) {
      return "td-off align-middle";
    }

  }
  const shiftToPool = (e) => {
    console.log(e.id);

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
  return (
    <>
      {console.log("infinito?")}
      {shiftType.map(type => {
        return <tr className="">
          <th className="table-dark align-middle">{capitalize(type)}</th>
          {/* {data.length === 0 ? <td colspan="7"> <h3>  No Rota Yet</h3></td> : ""} */}
          {week.map(day => {
            let datestr = day.toISOString().slice(0, 10);

            let theShift = data.find(shift => shift.shiftType == type && new Date((new Date(shift.date.date).getTime()) + 120 * 60 * 1000 + 1).toISOString().slice(0, 10) == datestr);

            if (theShift) {

              return (<td

                className={tdcolor(theShift.swapping, theShift.shiftType, theShift.active)}
                onClick={(e) => shiftToPool(e.currentTarget)}
                id={theShift.id}
                key={theShift.id} >
                {theShift.active ? <> <p>{("0" + (new Date(theShift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(theShift.startShift.date).getMinutes())).slice(-2)} /
                              {("0" + (new Date(theShift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(theShift.endShift.date).getMinutes())).slice(-2)}</p>
                  <b>{theShift.branch}</b>
                </>
                  : <b>OFF</b>}

              </td>)
            }else{
              return <td className="td-ns"><b> No shift found</b> </td>
            }

          })}
        </tr>

      })}
    </>
  )
}
export default BodyRota;