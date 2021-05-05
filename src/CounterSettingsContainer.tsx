import {useDispatch, useSelector} from "react-redux";

import {ActionCreatorsType, changeMaxValueAC, changeStartValueAC, setValuesAC} from "./redux/counterReducer";
import {Dispatch} from "redux";
import React, {useCallback} from "react";
import {selectAllValues} from "./redux/selectors";
import CounterSettings from "./CounterSettings";


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

    const setCounterSettings = useCallback((startValue: number)=>{
        dispatch(setValuesAC(startValue))
    },[startValue])

    const changeMaxValue = useCallback((maxValue: number)=>{
        debugger
        dispatch(changeMaxValueAC(maxValue))
    },[maxValue])

    const changeStartValue = useCallback((startValue: number)=> {
        debugger
        dispatch(changeStartValueAC(startValue))
    },[startValue])


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

