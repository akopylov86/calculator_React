import React from "react";

function ResultLine({value, defaultValue, formulaLine}) {
    const formulaStr = formulaLine
                        .map((element, index)=> {
                            if(formulaLine[index+1] && typeof formulaLine[index+1] === "object" && formulaLine[index+1].countNow)
                                return null;
                            return typeof element === "object" ? element.formulaLine(/*formulaLine[index-1]*/) : element})
                        .join(" ")
    return(
        <div className="result_container">
            <div className="full_line">{formulaStr}</div>
            <div className="result"><input value={(defaultValue && !value) ? defaultValue : value} readOnly={true} type="string"/></div>
        </div>
    )
}

export default  ResultLine