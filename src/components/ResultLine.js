import React from "react";

function ResultLine({value, formulaLine}) {
    const formulaStr = formulaLine
                        .map(element=> element.sign ?? element)
                        .join(" ")
    return(
        <div className="result_container">
            <div className="full_line">{formulaStr}</div>
            <div className="result"><input value={value} readOnly={true} type="string"/></div>
        </div>
    )
}

export default  ResultLine