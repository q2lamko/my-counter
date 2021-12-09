import React from 'react';
import css from "./Display.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {incCounterValueAC, incResetValueAC} from "../BLL/counter-reducer";

const DisplayOnRedux = () => {
    const value = useSelector<AppStateType, number|string>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const disable = useSelector<AppStateType, boolean>(state => state.counter.disable)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const dispatch = useDispatch();

    const onIncClickHandler = () => {
        dispatch(incCounterValueAC())
    };
    const onResetClickHandler = () => {
        dispatch(incResetValueAC())
    };

    const checkIncDisable = value >= maxValue ? disable : !disable
    const checkResetDisable = value === minValue ? disable : !disable

    return (
        <div className={css.mainContainer}>
            <div className={value === maxValue ? css.displayMaxValue : css.displayValue}>
                 {error ? 'ERROR' : '123123123'}
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
            </div>
        </div>
    )
}

export default DisplayOnRedux;