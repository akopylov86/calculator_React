import React from "react";
import operationList from "../../operations/OperationList";

function Operators({handleOperator,type}) {
    let allList;
    allList = operationList();
    const basicList = allList[type];
    //const extendedList = allList.extended;
    return (
        <div className={`${type}_operators`}>
            {basicList.map(element => {
                const obj = new element();
                return (<div className={`button ${type}_operator`} key={obj.sign} onClick={()=>handleOperator(obj)}>{obj.sign}</div>)
            })}

        </div>

    )
}

export default Operators