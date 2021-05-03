import React from "react";
import {CounterSettingsScreen} from "./CounterSettingsScreen";
import {Button} from "./Button";
import {changeMaxValueAC} from "./redux/counterReducer";



type CounterSettingsPropsType = {
    startValue: number
    maxValue: number
    setDisabledButtonFlag: boolean
    setCounterSettings: (startValue: number) => void
    changeMaxValue : (maxValue: number) => void,
    changeStartValue : (startValue: number) => void,

}

export function CounterSettings(props: CounterSettingsPropsType) {

    const {
        setDisabledButtonFlag,
        startValue,
        maxValue,
        setCounterSettings,
        changeMaxValue,
        changeStartValue
    } = props


    const conditionError: boolean = setDisabledButtonFlag || startValue < 0 || maxValue < 0 || maxValue <= startValue

    const setCounterSettingsHandler = () => {
        setCounterSettings(startValue)
    }

    return (
        <div className='counter_wrapper'>
            <CounterSettingsScreen startValue={startValue}
                                   maxValue={maxValue}
                                   changeMaxValue={changeMaxValue}
                                   changeStartValue={changeStartValue}

            />
            <div className={'buttons_wrapper'}>
                <Button callback={setCounterSettingsHandler}
                        disabled={conditionError}
                        name={'set'}/>
            </div>
        </div>
    )
}

