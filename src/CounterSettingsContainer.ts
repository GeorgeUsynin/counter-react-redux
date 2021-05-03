import {connect} from "react-redux";
import {CounterSettings} from "./CounterSettings";
import {changeMaxValueAC, changeStartValueAC, InitialCounterStateType, setValuesAC} from "./redux/counterReducer";
import {IGlobalState} from "./redux/redux-store";
import {Dispatch} from "redux";


type MapStateType = {
    counter: InitialCounterStateType
}

type MapDispatchType = {
    changeMaxValue: (maxValue: number) => void
    changeStartValue: (startValue: number) => void
    setCounterSettings: (startValue: number) => void
}

export type CounterSettingsPropsType = MapStateType & MapDispatchType

const mapState = (state: IGlobalState): MapStateType => {
    return {
        counter: state.counter
    }
}

const mapDispatch = (dispatch: Dispatch): MapDispatchType => {
    return {
        changeMaxValue: (maxValue: number) => {
            dispatch(changeMaxValueAC(maxValue))
        },
        changeStartValue: (startValue: number) => {
            dispatch(changeStartValueAC(startValue))
        },
        setCounterSettings: (startValue: number) => {
            dispatch(setValuesAC(startValue))
        }
    }
}

const CounterSettingsContainer = connect(mapState, mapDispatch)(CounterSettings)

export default CounterSettingsContainer