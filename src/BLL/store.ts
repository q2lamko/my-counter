import {combineReducers, createStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../Utils/Local-storage";

export type AppStateType = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
        counter: counterReducer
    }
)

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})