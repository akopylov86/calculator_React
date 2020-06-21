import React from "react";

function Number({num, clickHandler}){

    return (
        // <td className="button number" onClick={()=>clickHandler(num)}>{num}</td>
        <div className="button number" onClick={()=>clickHandler(num)}>{num}</div>
    )
}
export default Number