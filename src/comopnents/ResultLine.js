import React from "react";

function ResultLine({value, defaultValue, formulaArr}) {
    const formulaStr = formulaArr
                        .reduce((res, element)=>
                            res + " " + (isNaN(element) ? element.formulaValue : element)
                            , "")

    return(
        <div className="result">
            <div className="full_line">{formulaStr}</div>
            <div className="result">
                <input className="result"
                       value={(defaultValue !== null && !value) ? defaultValue : value}
                       readOnly={true} type="string"/>
            </div>
        </div>
    )
}

export default  ResultLine