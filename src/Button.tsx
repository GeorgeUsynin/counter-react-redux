import React from "react";

type CounterButtonPropsType = {
    callback: () => void
    disabled: boolean | undefined
    name: string
}

export function Button(props: CounterButtonPropsType) {
    const disabledStyle = props.disabled ? 'disabledButton' : ''

    return (
        <div className={'button_wrapper'}>
            <button
                className={`button ${disabledStyle}`}
                disabled={props.disabled}
                onClick={props.callback}>
                {props.name}
            </button>
        </div>
    )
}