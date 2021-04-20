import React from "react";
import {Button} from "./Button";

type CounterButtonsPropsType = {
    incrementCounter: () => void
    resetCounter: () => void
    currentValue: number
    maxValue: number
    startValue: number
    flag: boolean
}

export function CounterButtons(props: CounterButtonsPropsType) {

    return (
        <div className='buttons_wrapper'>
            <Button
                name={'Inc'}
                disabled={props.flag || props.currentValue === props.maxValue}
                callback={props.incrementCounter}
            />
            <Button
                name={'Reset'}
                disabled={props.flag || props.currentValue === props.startValue}
                callback={props.resetCounter}
            />
        </div>
    )
}

