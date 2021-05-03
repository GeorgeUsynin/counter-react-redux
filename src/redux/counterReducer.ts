export enum ACTIONS_TYPES {
    CHANGE_START_VALUE = 'Counter/CHANGE_START_VALUE',
    CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_VALUE',
    SET_VALUES = 'Counter/SET_VALUES',
    INCREMENT_VALUE = 'Counter/INCREMENT_VALUE',
    RESET_COUNTER = 'Counter/RESET_COUNTER'
}

type changeStartValueACType = {
    type: ACTIONS_TYPES.CHANGE_START_VALUE
    payload: {
        startValue: number
    }
}

export const changeStartValueAC = (startValue: number) => {
    return {
        type: ACTIONS_TYPES.CHANGE_START_VALUE,
        payload: {
            startValue
        }
    }
}

type changeMaxValueACType = {
    type: ACTIONS_TYPES.CHANGE_MAX_VALUE
    payload: {
        maxValue: number
    }
}

export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: ACTIONS_TYPES.CHANGE_MAX_VALUE,
        payload: {
            maxValue
        }
    }
}

type setValuesACType = {
    type: ACTIONS_TYPES.SET_VALUES
    payload: {
        currentValue: number
    }
}

export const setValuesAC = (startValue: number) => {
    return {
        type: ACTIONS_TYPES.SET_VALUES,
        payload: {
            currentValue: startValue
        }
    }
}

type incrementValueACType = {
    type: ACTIONS_TYPES.INCREMENT_VALUE
}

export const incrementValueAC = () => {
    return {
        type: ACTIONS_TYPES.INCREMENT_VALUE
    }
}

type resetCounterACType = {
    type: ACTIONS_TYPES.RESET_COUNTER
    payload: {
        startValue: number
    }
}

export const resetCounterAC = (startValue: number) => {
    return {
        type: ACTIONS_TYPES.RESET_COUNTER,
        payload: {
            startValue
        }
    }
}

export type InitialCounterStateType = {
    startValue: number
    maxValue: number
    currentValue: number
    incResetDisabledButtonFlag: boolean
    setDisabledButtonFlag: boolean
}

const initialState: InitialCounterStateType = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    incResetDisabledButtonFlag: false,
    setDisabledButtonFlag: true
}

export const counterReducer = (state: InitialCounterStateType = initialState, action: ActionCreatorsType): InitialCounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.CHANGE_START_VALUE:
            return {
                ...state,
                startValue: action.payload.startValue,
                incResetDisabledButtonFlag: true,
                setDisabledButtonFlag: false
            }
        case ACTIONS_TYPES.CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload.maxValue,
                incResetDisabledButtonFlag: true,
                setDisabledButtonFlag: false
            }
        case ACTIONS_TYPES.SET_VALUES:
            return {
                ...state,
                currentValue: action.payload.currentValue,
                setDisabledButtonFlag: true,
                incResetDisabledButtonFlag: false
            }
        case ACTIONS_TYPES.INCREMENT_VALUE:
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        case ACTIONS_TYPES.RESET_COUNTER:
            return {
                ...state,
                currentValue: action.payload.startValue
            }
        default:
            return state
    }
}

export type ActionCreatorsType =
    changeStartValueACType
    | changeMaxValueACType
    | setValuesACType
    | incrementValueACType
    | resetCounterACType