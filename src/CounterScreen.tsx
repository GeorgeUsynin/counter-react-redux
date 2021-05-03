import React from "react";
import {CounterScreenPropsType} from "./CounterScreenContainer";

export function CounterScreen(props: CounterScreenPropsType) {

    const {
        startValue,
        maxValue,
        currentValue,
        incResetDisabledButtonFlag
    } = props.counter

    const conditionError: boolean = startValue < 0 || maxValue < 0 || maxValue <= startValue

    const showScreen = (flag: boolean) => {
        if (conditionError){
            return <div className={'error_text_view'}>Incorrect value!</div>
        }
        else if (flag){
            return <div className={'normal_text_view'}>enter values and press "set"</div>
        }
        else {
            return <div className={`counter_value ${currentValue === maxValue ? 'maxCount_text_view' : ''}`}>{currentValue}</div>
        }
    }


    return (
        <div className='screen'>
            {showScreen(incResetDisabledButtonFlag)}
        </div>
    )
}