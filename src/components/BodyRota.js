function BodyRota({ data }) {
    if (!data) {
      return <p>loading...</p>
    }
    const shiftToPool = (e) => {
        alert("aqui mandará el detalle del turno con boton empezar proceso de cambio");
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
                        className="table-success"
                        onClick={(e) => shiftToPool(e)}
                        id={shift.id} >
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
                        className="table-success"
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