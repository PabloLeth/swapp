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
                        { ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                        { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}

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
                        { ("0" + (new Date(shift.startShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.startShift.date).getMinutes())).slice(-2)} /
                        { ("0" + (new Date(shift.endShift.date).getHours())).slice(-2)}:{("0" + (new Date(shift.endShift.date).getMinutes())).slice(-2)}

                    </td>)
                }
            }

            )}
        </tr>