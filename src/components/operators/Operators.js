import React from "react";
import operationList from "../../operations/OperationList";

function Operators({handleOperator,clearAll}) {
    let allList;
    allList = operationList();
    const basicList = allList.basic;
    const extendedList = allList.extended;
    return (
        <div className="button operators">
            {basicList.map(element => {
                const obj = new element();
                return (<div className="button" key={obj.sign} onClick={()=>handleOperator(obj)}>{obj.sign}</div>)
            })}
            {extendedList.map(element => {
                const obj = new element();
                return (<div className="button" key={obj.sign} onClick={()=>handleOperator(obj)}>{obj.sign}</div>)
            })}
        </div>

    )
}

export default Operators