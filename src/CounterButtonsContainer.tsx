import React from "react";
import {CounterButtons} from "./CounterButtons";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {ActionCreatorsType, incrementValueAC, resetCounterAC} from "./redux/counterReducer";
import {selectAllValues} from "./redux/selectors";


const CounterButtonsContainer = () => {

   const {incResetDisabledButtonFlag,maxValue,currentValue,startValue} = useSelector(selectAllValues)

   const dispatch = useDispatch<Dispatch<ActionCreatorsType>>()


   //dispatch handlers
   const resetCounter = (startValue: number) => {
      dispatch(resetCounterAC(startValue))
   }
   const incrementCounter = () => {
      dispatch(incrementValueAC())
   }

   return (
       <React.Fragment>
          <CounterButtons
              incResetDisabledButtonFlag={incResetDisabledButtonFlag}
              maxValue={maxValue}
              currentValue={currentValue}
              startValue={startValue}
              resetCounter={resetCounter}
              incrementCounter={incrementCounter}
              />
       </React.Fragment>
   )

}

export default CounterButtonsContainer
