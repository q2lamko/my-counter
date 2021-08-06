import React, {ChangeEvent, useEffect, useState} from 'react';
import {log} from "util";


type TunerType = {
    maxValue: number
    setMaxValue: (max: number) => void
    minValue: number
    setMinValue: (min: number) => void
    value: number | string
    setValue: (value: number | string) => void
    setDisable: (disable: boolean) => void

    error: boolean
    setError: (error: boolean) => void
}

const Tuner = (props: TunerType) => {

    useEffect(() => {
        props.setError(props.minValue < 0 || props.minValue >= props.maxValue)
    }, [props.minValue, props.maxValue])



    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setDisable(false)
        props.setValue('Mr. Counter developer, put set, plz')
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setDisable(false)
        props.setValue('Mr. Counter developer, put set, plz')
        props.setMinValue(+e.currentTarget.value)
    }

    const onClickSetHandler = () => {
        props.setDisable(true)
        props.setValue(props.minValue)
    }


    const checkSetDisable = props.maxValue <= props.minValue || props.minValue < 0

    return (
        <div>
            <div>
                <div>
                    Max Value: <input type="number" onChange={onChangeMaxValueHandler} value={props.maxValue}/>
                </div>
                <div>
                    Min Value: <input type="number" onChange={onChangeMinValueHandler} value={props.minValue}/>
                </div>
            </div>
            <div>
                <button onClick={onClickSetHandler} disabled={checkSetDisable}>SET</button>
            </div>
        </div>

    )

}

export default Tuner