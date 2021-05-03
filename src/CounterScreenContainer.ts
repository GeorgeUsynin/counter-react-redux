import {connect} from "react-redux";
import {CounterScreen} from "./CounterScreen";
import {IGlobalState} from "./redux/redux-store";
import {InitialCounterStateType} from "./redux/counterReducer";

type MapStateType = {
    counter: InitialCounterStateType
}

type MapDispatchType = {

}

export type CounterScreenPropsType = MapStateType & MapDispatchType

const mapState = (state: IGlobalState) : MapStateType => {
    return{
        counter: state.counter
    }
}

const CounterScreenContainer = connect(mapState, {})(CounterScreen)

export default CounterScreenContainer