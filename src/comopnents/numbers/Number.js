import React from "react";

function Number({num, clickHandler}){

    return (
        <div className="button number" onClick={()=>clickHandler(num)}>{num}</div>
    )
}
export default Number