import React from "react";
import {CounterSettingsScreen} from "./CounterSettingsScreen";
import {Button} from "./Button";


type CounterSettingsPropsType = {
    startValue: number
    maxValue: number
    currentValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    setCounterSettings: () => void
    getCounterState: () => void
    flag: boolean

}

export function CounterSettings(props: CounterSettingsPropsType) {

    const conditionError: boolean = props.flag || props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue

    return (
        <div className='counter_wrapper'>
            <CounterSettingsScreen startValue={props.startValue}
                                   maxValue={props.maxValue}
                                   changeMaxValue={props.changeMaxValue}
                                   changeStartValue={props.changeStartValue}

            />
            <div className={'buttons_wrapper'}>
                <Button callback={props.setCounterSettings}
                        disabled={conditionError}
                        name={'set'}/>
                <Button callback={props.getCounterState}
                        disabled={false}
                        name={'get'}/>
            </div>
        </div>
    )
}

