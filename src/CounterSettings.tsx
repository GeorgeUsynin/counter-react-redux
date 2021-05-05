import React, {useCallback} from "react";
import {CounterSettingsScreen} from "./CounterSettingsScreen";
import {Button} from "./Button";
import {changeStartValueAC} from "./redux/counterReducer";


type CounterSettingsPropsType = {
    startValue: number
    maxValue: number
    setDisabledButtonFlag: boolean
    setCounterSettings: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void,
    changeStartValue: (startValue: number) => void,

}

function CounterSettingsMemo(props: CounterSettingsPropsType) {

    const {
        setDisabledButtonFlag,
        startValue,
        maxValue,
        setCounterSettings,
        changeMaxValue,
        changeStartValue
    } = props


    const conditionError: boolean = setDisabledButtonFlag || startValue < 0 || maxValue < 0 || maxValue <= startValue


    const setCounterSettingsHandler = useCallback(() => {
        setCounterSettings(startValue)
    }, [startValue])

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

const CounterSettings = React.memo(CounterSettingsMemo)

export default CounterSettings

