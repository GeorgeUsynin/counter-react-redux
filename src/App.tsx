import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettingsContainer} from "./CounterSettingsContainer";


function App() {


    // const setCounterSettings = () => {
    //     setCurrentValue(startValue)
    //     setSetDisabledButtonFlag(true)
    //     setIncResetDisabledButtonFlag(false)
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }

    // const getCounterState = () => {
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString){
    //         let newStartValue = JSON.parse(startValueAsString)
    //         setStartValue(newStartValue)
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString){
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    // }

    return (
        <div className="App">
            <CounterSettingsContainer />
            <Counter />
        </div>
    );
}

export default App;

