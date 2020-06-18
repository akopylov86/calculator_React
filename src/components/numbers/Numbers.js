import React from "react";
import Number from "./Number";

function Numbers({addNumber}) {
    return(
        <table>
            <tbody>
                <tr>
                    <Number clickHandler={addNumber} num="7"/>
                    <Number clickHandler={addNumber} num="8"/>
                    <Number clickHandler={addNumber} num="9"/>
                </tr>
                <tr>
                    <Number clickHandler={addNumber} num="4"/>
                    <Number clickHandler={addNumber} num="5"/>
                    <Number clickHandler={addNumber} num="6"/>
                </tr>
                <tr>
                    <Number clickHandler={addNumber} num="1"/>
                    <Number clickHandler={addNumber} num="2"/>
                    <Number clickHandler={addNumber} num="3"/>
                </tr>
                <tr>
                    <Number clickHandler={addNumber} num="+/-"/>
                    <Number clickHandler={addNumber} num="0"/>
                    <Number clickHandler={addNumber} num="."/>
                </tr>
            </tbody>
        </table>
    )
}

export default Numbers