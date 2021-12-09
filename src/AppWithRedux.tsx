import React from 'react';
import './App.css';

import DisplayOnRedux from "./Display/DisplayOnRedux";
import TunerOnRedux from "./Tuner/TunerOnRedux";

function AppWithRedux() {
    return (
        <div className="App">
            <>
                <DisplayOnRedux/>
                <TunerOnRedux/>
            </>
        </div>
    );
}

export default AppWithRedux;
