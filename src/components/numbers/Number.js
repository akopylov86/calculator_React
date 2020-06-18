import React from "react";

function Number({num, clickHandler}){

    return (
        <td className="button number" onClick={()=>clickHandler(num)}>{num}</td>
    )
}
export default Number