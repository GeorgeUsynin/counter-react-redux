import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";


function App() {


    const [startValue, setStartValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(5)

    const [currentValue, setCurrentValue] = useState<number>(startValue)

    const [incResetDisabledButtonFlag, setIncResetDisabledButtonFlag] = useState<boolean>(false)

    const [setDisabledButtonFlag, setSetDisabledButtonFlag] = useState<boolean>(true)

    const incrementCounter = () => {
        setCurrentValue(prev => prev + 1)
    }

    const resetCounter = () => {
        setCurrentValue(startValue)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setIncResetDisabledButtonFlag(true)
        setSetDisabledButtonFlag(false)
    }

    const changeStartValue = (value: number) => {
        setStartValue(value)
        setIncResetDisabledButtonFlag(true)
        setSetDisabledButtonFlag(false)
    }

    const setCounterSettings = () => {
        setCurrentValue(startValue)
        setSetDisabledButtonFlag(true)
        setIncResetDisabledButtonFlag(false)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    const getCounterState = () => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString){
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString){
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }

    return (
        <div className="App">
            <CounterSettings startValue={startValue}
                             maxValue={maxValue}
                             currentValue={currentValue}
                             changeMaxValue={changeMaxValue}
                             changeStartValue={changeStartValue}
                             setCounterSettings={setCounterSettings}
                             getCounterState={getCounterState}
                             flag={setDisabledButtonFlag}
            />
            <Counter incrementCounter={incrementCounter}
                     resetCounter={resetCounter}
                     currentValue={currentValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     flag={incResetDisabledButtonFlag}
            />
        </div>
    );
}

export default App;

