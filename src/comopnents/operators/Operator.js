import React from "react";
import {ButtonsUIConst} from "../../consts/ButtonsUIConst";


const Operator = ({type, operator, handleOperator} ) => {
    const sign = ButtonsUIConst[operator];
    return (<div className={`button ${type}_operator`}
          key={sign}
          onClick={() => handleOperator(operator)}
    >{sign}</div>)
}
export default Operator