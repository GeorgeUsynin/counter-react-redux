import {combineReducers, createStore} from "redux";
import {counterReducer, InitialCounterStateType, initialState} from "./counterReducer";

const RootReducer = combineReducers({
    counter: counterReducer
})

let preloadedStartValue, preloadedMaxValue

const persistedStartValue = localStorage.getItem('start_value')
if (persistedStartValue) {
    preloadedStartValue = JSON.parse(persistedStartValue)
} else {
    preloadedStartValue = 0
}

const persistedMaxValue = localStorage.getItem('max_value')
if (persistedMaxValue) {
    preloadedMaxValue = JSON.parse(persistedMaxValue)
} else {
    preloadedMaxValue = 5
}

export const store = createStore(RootReducer, {
    counter: {
        ...initialState,
        startValue: preloadedStartValue,
        maxValue: preloadedMaxValue,
        currentValue: preloadedStartValue
    }
})

store.subscribe(() => {
    localStorage.setItem('start_value', JSON.stringify(store.getState().counter.startValue))
    localStorage.setItem('max_value', JSON.stringify(store.getState().counter.maxValue))
})

export type IGlobalState = ReturnType<typeof RootReducer>

