import React from "react";
import {Button} from "./Button";
import {CounterButtonsPropsType} from "./CounterButtonsContainer";


export function CounterButtons(props: CounterButtonsPropsType) {

    const {
        incResetDisabledButtonFlag,
        maxValue,
        currentValue,
        startValue
    } = props.counter

    const resetCounter = () => {
        props.resetCounter(startValue)
    }

    return (
        <div className='buttons_wrapper'>
            <Button
                name={'Inc'}
                disabled={incResetDisabledButtonFlag || currentValue === maxValue}
                callback={props.incrementCounter}
            />
            <Button
                name={'Reset'}
                disabled={incResetDisabledButtonFlag || currentValue === startValue}
                callback={resetCounter}
            />
        </div>
    )
}

