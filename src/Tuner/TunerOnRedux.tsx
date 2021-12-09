import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {setMaxValueAC, setMinValueAC, setTunerAC} from "../BLL/counter-reducer";

const TunerOnRedux = () => {
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const dispatch = useDispatch();
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
        // props.setValue('Mr. Counter developer, put set, plz')
    }
    const onClickSetHandler = () => {
        dispatch(setTunerAC())
       }
    const checkSetDisable = maxValue <= minValue || minValue < 0;

    return (
        <div>
            <div>
                <div>
                    Max Value: <input type="number" onChange={onChangeMaxValueHandler} value={maxValue}/>
                </div>
                <div>
                    Min Value: <input type="number" onChange={onChangeMinValueHandler} value={minValue}/>
                </div>
            </div>
            <div>
                <button onClick={onClickSetHandler} disabled={checkSetDisable}>SET</button>
            </div>
        </div>
    )
}

export default TunerOnRedux;