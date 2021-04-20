import React from "react";
import {CounterScreen} from "./CounterScreen";
import {CounterButtons} from "./CounterButtons";

export type CounterPropsType = {
    incrementCounter: () => void
    resetCounter: () => void
    currentValue: number
    maxValue: number
    startValue: number
    flag: boolean
}


export function Counter(props: CounterPropsType) {
    return (
        <div className='counter_wrapper'>
            <CounterScreen currentValue={props.currentValue}
                           maxValue={props.maxValue}
                           startValue={props.startValue}
                           flag={props.flag}/>
            <CounterButtons
                incrementCounter={props.incrementCounter}
                resetCounter={props.resetCounter}
                currentValue={props.currentValue}
                maxValue={props.maxValue}
                startValue={props.startValue}
                flag={props.flag}
            />
        </div>
    )
}