import {combineReducers, createStore } from "redux";
import {counterReducer} from "./counterReducer";

const RootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(RootReducer)

export type IGlobalState = ReturnType<typeof RootReducer>

