import {CounterScreen} from "./CounterScreen";
import React from "react";
import {useSelector} from "react-redux";
import {selectAllValues} from "./redux/selectors";

const CounterScreenContainer = () => {

    const {startValue, maxValue, currentValue, incResetDisabledButtonFlag} = useSelector(selectAllValues)

    return (
        <React.Fragment>
            <CounterScreen startValue={startValue}
                           maxValue={maxValue}
                           currentValue={currentValue}
                           incResetDisabledButtonFlag={incResetDisabledButtonFlag}
            />
        </React.Fragment>
    )
}

export default CounterScreenContainer