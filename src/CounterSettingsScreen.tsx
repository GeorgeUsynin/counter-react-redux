import React, {ChangeEvent} from "react";

type CounterSettingsScreenPropsType = {
    startValue: number
    maxValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
}


export function CounterSettingsScreen(props: CounterSettingsScreenPropsType) {

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeMaxValue(parseInt(e.currentTarget.value))

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStartValue(parseInt(e.currentTarget.value))

    const conditionError: boolean = props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue

    return (
        <div className={'screen'}>
            <div className={'max_start_wrapper'}>
                <div className={'normal_text_view'}>max value</div>
                <div>
                    <input
                        type="number"
                        value={props.maxValue}
                        onChange={changeMaxValueHandler}
                        className={conditionError ? 'input_error' : ''}
                    />
                </div>
            </div>
            <div className={'max_start_wrapper'}>
                <div className={'normal_text_view'}>start value</div>
                <div><input
                    type="number"
                    value={props.startValue}
                    onChange={changeStartValueHandler}
                    className={conditionError ? 'input_error' : ''}
                /></div>
            </div>
        </div>
    )
}