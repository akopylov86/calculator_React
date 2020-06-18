import React from "react";
import Plus from "../../operations/Plus";
import Minus from "../../operations/Minus";

function Operators({handleOperator}) {
    return (
        <div className="button operators">
            <div className="button" onClick={()=>handleOperator(Plus)}>+</div>
            <div className="button" onClick={()=>handleOperator(Minus)}>-</div>
        </div>
    )
}

export default Operators