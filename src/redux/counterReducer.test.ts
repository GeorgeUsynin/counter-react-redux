import {
    ACTIONS_TYPES,
    counterReducer,
    incrementValueAC,
    InitialCounterStateType,
    resetCounterAC
} from "./counterReducer";

let initialState: InitialCounterStateType

beforeEach(() => {
    initialState = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0,
        incResetDisabledButtonFlag: false,
        setDisabledButtonFlag: true
    }
})

test('value should increment', () => {
    const incrementState = counterReducer(initialState, incrementValueAC())
    expect(initialState.currentValue).toBe(0)
    expect(incrementState.currentValue).toBe(1)
    expect(initialState.startValue).toBe(0)
})

test('value should reset', ()=>{
    initialState.currentValue = 5
    const resetState = counterReducer(initialState,resetCounterAC(initialState.startValue))
    expect(initialState.currentValue).toBe(5)
    expect(resetState.currentValue).toBe(0)
})
