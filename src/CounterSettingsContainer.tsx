import {useDispatch, useSelector} from "react-redux";
import {CounterSettings} from "./CounterSettings";
import {
    ActionCreatorsType,
    changeMaxValueAC,
    changeStartValueAC,
    InitialCounterStateType,
    setValuesAC
} from "./redux/counterReducer";
import {Dispatch} from "redux";
import React from "react";
import {selectAllValues} from "./redux/selectors";
import {IGlobalState} from "./redux/redux-store";


export const CounterSettingsContainer = () => {

    //useSelector

    // const {
    //     startValue,
    //     maxValue,
    //     setDisabledButtonFlag
    // } = useSelector<IGlobalState, InitialCounterStateType>(state => state.counter)
    const {
            startValue,
            maxValue,
            setDisabledButtonFlag
        } = useSelector(selectAllValues)


    //useDispatch
    const dispatch = useDispatch<Dispatch<ActionCreatorsType>>()

    //handlers
    const setCounterSettings = () => {
        dispatch(setValuesAC(startValue))
    }

    const changeMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
    }

    const changeStartValue = (startValue: number) => {
        dispatch(changeStartValueAC(startValue))
    }

    return (
        <React.Fragment>
            <CounterSettings
                startValue={startValue}
                maxValue={maxValue}
                setDisabledButtonFlag={setDisabledButtonFlag}
                setCounterSettings={setCounterSettings}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
            />
        </React.Fragment>
    )
}

