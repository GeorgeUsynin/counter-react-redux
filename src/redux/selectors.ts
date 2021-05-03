import {IGlobalState} from "./redux-store";

interface IRootState extends IGlobalState {}

export const selectAllValues = (state: IRootState) => state.counter

