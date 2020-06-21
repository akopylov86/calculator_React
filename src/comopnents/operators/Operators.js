import React from "react";
import * as operationList from "../../consts/OperatorsUI";
import Operator from "./Operator";

function Operators({handleOperator,type}) {
    const listOperators = operationList[type + "Operators"];
    return (
        <div className={`${type}_operators`}>
            {listOperators.map(element =>
                <Operator type={type} operator={element} key={element} handleOperator={handleOperator}/>
            )}

        </div>

    )
}

export default Operators