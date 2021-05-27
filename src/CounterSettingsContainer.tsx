import {useDispatch, useSelector} from "react-redux";

import {
    ActionCreatorsType,
    changeMaxValueAC,
    changeStartValueAC,
    setValuesAC,
    setValuesFromLocalStorageAC
} from "./redux/counterReducer";
import {Dispatch} from "redux";
import React, {useCallback, useEffect} from "react";
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
        currentValue,
        setDisabledButtonFlag
    } = useSelector(selectAllValues)

    useEffect(() => {
        const localStorageStartValue = localStorage.getItem('start_value')
        const localStorageMaxValue = localStorage.getItem('max_value')
        if (localStorageStartValue && localStorageMaxValue) {
            dispatch(setValuesFromLocalStorageAC(JSON.parse(localStorageStartValue), JSON.parse(localStorageMaxValue)))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('max_value', JSON.stringify(maxValue))
        localStorage.setItem('start_value', JSON.stringify(startValue))
    },[maxValue,startValue])

    //useDispatch
    const dispatch = useDispatch<Dispatch<ActionCreatorsType>>()

    //dispatch handlers
    const setCounterSettings = useCallback((startValue: number) => {
        dispatch(setValuesAC(startValue))
    }, [startValue])

    const changeMaxValue = useCallback((maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))

    }, [maxValue])

    const changeStartValue = useCallback((startValue: number) => {
        dispatch(changeStartValueAC(startValue))

    }, [startValue])


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

