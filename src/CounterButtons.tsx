import React from "react";
import {Button} from "./Button";

type CounterButtonsPropsType = {
    incResetDisabledButtonFlag: boolean
    maxValue: number
    currentValue: number
    startValue: number
    resetCounter : (startValue: number) => void
    incrementCounter : () => void
}

export function CounterButtons(props: CounterButtonsPropsType) {

    const {
        incResetDisabledButtonFlag,
        maxValue,
        currentValue,
        startValue,
        resetCounter,
        incrementCounter
    } = props

    const resetCounterHandler = () => {
        resetCounter(startValue)
    }

    return (
        <div className='buttons_wrapper'>
            <Button
                name={'Inc'}
                disabled={incResetDisabledButtonFlag || currentValue === maxValue}
                callback={incrementCounter}
            />
            <Button
                name={'Reset'}
                disabled={incResetDisabledButtonFlag || currentValue === startValue}
                callback={resetCounterHandler}
            />
        </div>
    )
}

