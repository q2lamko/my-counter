import React from 'react';
import css from "./Display.module.css"



type DisplayType = {
    value: number | string
    setValue: (value: number | string) => void
    disable: boolean

    maxValue: number
    minValue:number

    error:boolean
}


const Display = (props: DisplayType) => {

    const onIncClickHandler = () => {
        props.setValue(+props.value + 1)
    }

    const onResetClickHandler = () => {
        props.setValue(props.minValue)
    }

    const checkIncDisable = props.value >= props.maxValue ?  props.disable :  !props.disable
    const checkResetDisable = props.value === props.minValue ?  props.disable : !props.disable


    return (
        <div className={css.mainContainer}>

            <div className={props.value == props.maxValue ? css.displayMaxValue : css.displayValue}>
                {props.error? 'ERROR' : props.value}
            </div>


            <div className={css.buttons}>
                <button onClick={onIncClickHandler}
                        disabled={checkIncDisable}>
                    INC
                </button>
                <button onClick={onResetClickHandler}
                        disabled={checkResetDisable}>
                    RESET
                </button>
            </div>

        </div>
    )
}


export default Display;