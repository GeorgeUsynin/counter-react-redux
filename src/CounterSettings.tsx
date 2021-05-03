import React from "react";
import {CounterSettingsScreen} from "./CounterSettingsScreen";
import {Button} from "./Button";
import {CounterSettingsPropsType} from "./CounterSettingsContainer";


export function CounterSettings(props: CounterSettingsPropsType) {

    const {
        setDisabledButtonFlag,
        startValue,
        maxValue
    } = props.counter


    const conditionError: boolean = setDisabledButtonFlag || startValue < 0 || maxValue < 0 || maxValue <= startValue

    const setCounterSettings = () => {
        props.setCounterSettings(startValue)
    }

    return (
        <div className='counter_wrapper'>
            <CounterSettingsScreen startValue={startValue}
                                   maxValue={maxValue}
                                   changeMaxValue={props.changeMaxValue}
                                   changeStartValue={props.changeStartValue}

            />
            <div className={'buttons_wrapper'}>
                <Button callback={setCounterSettings}
                        disabled={conditionError}
                        name={'set'}/>
            </div>
        </div>
    )
}

