import React from "react";

type CounterScreenPropsType = {
    currentValue: number
    maxValue: number
    startValue: number
    flag: boolean
}


export function CounterScreen(props: CounterScreenPropsType) {

    const conditionError: boolean = props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue

    const showScreen = (flag: boolean) => {
        if (conditionError){
            return <div className={'error_text_view'}>Incorrect value!</div>
        }
        else if (flag){
            return <div className={'normal_text_view'}>enter values and press "set"</div>
        }
        else {
            return <div className={`counter_value ${props.currentValue === props.maxValue ? 'maxCount_text_view' : ''}`}>{props.currentValue}</div>
        }
    }


    return (
        <div className='screen'>
            {showScreen(props.flag)}
        </div>
    )
}