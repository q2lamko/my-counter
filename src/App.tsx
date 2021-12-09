import React, {useEffect, useState} from 'react';
import './App.css';
import Display from "./Display/Display";
import Tuner from "./Tuner/Tuner";


function App() {

    let [value, setValue] = useState<number | string>(0)
    let [disable, setDisable] = useState(true) // UseState of Display component
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0) // UseState of Tuner component
    let [error, setError] = useState(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }

    }, [])


    return (
        <div className="App">
            <>
                <Display
                    value={value}
                    setValue={setValue}
                    disable={disable}
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                />
                <Tuner
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    minValue={minValue}
                    setMinValue={setMinValue}
                    value={value}
                    setValue={setValue}
                    error={error}
                    setError={setError}
                    setDisable={setDisable}
                />

            </>
        </div>
    );
}

export default App;
