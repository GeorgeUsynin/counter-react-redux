import {connect} from "react-redux";
import {CounterButtons} from "./CounterButtons";
import {incrementValueAC, InitialCounterStateType, resetCounterAC} from "./redux/counterReducer";
import {IGlobalState} from "./redux/redux-store";
import {Dispatch} from "redux";


type MapStateType = {
    counter: InitialCounterStateType
}

type MapDispatchType = {
    incrementCounter: () => void
    resetCounter: (startValue: number) => void
}

export type CounterButtonsPropsType = MapStateType & MapDispatchType

const mapState = (state: IGlobalState): MapStateType => {
    return {
        counter: state.counter
    }
}

const mapDispatch = (dispatch: Dispatch): MapDispatchType => {
    return {
        incrementCounter: () => {
            dispatch(incrementValueAC())
        },
        resetCounter: (startValue: number) => {
            dispatch(resetCounterAC(startValue))
        }
    }
}


const CounterButtonsContainer = connect(mapState, mapDispatch)(CounterButtons)

export default CounterButtonsContainer
