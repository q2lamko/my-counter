import React, {useEffect} from 'react';
import css from "./Display.module.css"

type DisplayType = {
    value: number | string
    setValue: (value: number | string) => void
    disable: boolean
    maxValue: number
    minValue: number
    error: boolean
}

const Display = (props: DisplayType) => {
    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(props.value))
    }, [props.value])

    const onIncClickHandler = () => {
        props.setValue(+props.value + 1)
    }
    const onResetClickHandler = () => {
        props.setValue(props.minValue)
    }

    const setLocalStorageHandler = () => {
        localStorage.setItem("counterValue", "" + props.value) // можно использовать JSON.stringify()
        localStorage.setItem("counterValue++", "" + (+props.value + 1)) // можно использовать JSON.stringify()
    }
    const getLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = +valueAsString // можно использовать JSON.parse()
            props.setValue(newValue)
        }
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear();
        props.setValue(0)
    }
    const removeLocalStorageHandler = () => {
        localStorage.removeItem("counterValue++");
    }

    const checkIncDisable = props.value >= props.maxValue ? props.disable : !props.disable
    const checkResetDisable = props.value === props.minValue ? props.disable : !props.disable

    return (
        <div className={css.mainContainer}>
            <div className={props.value == props.maxValue ? css.displayMaxValue : css.displayValue}>
                {props.error ? 'ERROR' : props.value}
            </div>
            <div className={css.frame}>
                <button className={css.customBtn} onClick={onIncClickHandler}
                        disabled={checkIncDisable}>
                    INC
                </button>
                <button className={css.customBtn} onClick={onResetClickHandler}
                        disabled={checkResetDisable}>
                    RESET
                </button>
                <br/>
                <div >
                    <button className={css.customBtn} onClick={setLocalStorageHandler}>{"setLocalStorage"} </button>
                    <button onClick={getLocalStorageHandler}>{"getLocalStorage"} </button>
                    <button onClick={clearLocalStorageHandler}>{"clearLocalStorage"} </button>
                    <button onClick={removeLocalStorageHandler}>{"removeLocalStorage"} </button>
                </div>
            </div>
        </div>
    )
}


export default Display;