import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettingsContainer} from "./CounterSettingsContainer";


function App() {

    return (
        <div className="App">
            <CounterSettingsContainer />
            <Counter />
        </div>
    );
}

export default App;

