import React from "react";
import Number from "./Number";
import {NumbersPadUI} from "../../consts/NumbersPadUI";
import {ButtonsUIConst} from "../../consts/ButtonsUIConst"


function Numbers({addNumber}) {
    return(
            <div className="numbers_pad">
                {NumbersPadUI.map((element)=>
                    (<Number clickHandler={addNumber} key={element} num={ButtonsUIConst[element]}/>)
                )}
            </div>
    )
}

export default Numbers