import React from "react";
import CounterScreenContainer from "./CounterScreenContainer";
import CounterButtonsContainer from "./CounterButtonsContainer";


export function Counter() {
    return (
        <div className='counter_wrapper'>
            <CounterScreenContainer />
            <CounterButtonsContainer />
        </div>
    )
}