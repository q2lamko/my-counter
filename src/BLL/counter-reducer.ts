// type InitialStateType = typeof initialState | Value
type InitialStateType = {
    value: number
    minValue: number
    disable: boolean
    maxValue: number
    error: boolean
}
const initialState = {
    value: 0,
    minValue: 0,
    disable: true,
    maxValue: 5,
    error: true
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    console.log(state)
    switch (action.type) {
        case "INC-VALUE":
            return {...state, value: state.value + 1};
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {...state, value: action.value + 1};
        case "INC-RESET-VALUE":
            return {...state, value: 0};

        case "SET-MAX-VALUE":
            return {...state, disable: false, maxValue: action.maxValue};
        case "SET-MIN-VALUE":
            return {...state, disable: false, minValue: action.minValue};
        case "SET-TUNER":
            return {...state, disable: true, value: state.minValue};

        default:
            return state
    }
}
//Блок дисплея
export const incCounterValueAC = () => (
    {type: "INC-VALUE"} as const
);
export const setValueFromLocalStorageAC = (value: number) => (
    {type: "SET-VALUE-FROM-LOCAL-STORAGE", value} as const
);
export const incResetValueAC = () => (
    {type: "INC-RESET-VALUE"} as const
);

//Блок настроек
export const setMaxValueAC = (e: number) => (
    {type: "SET-MAX-VALUE", maxValue: e} as const
);

export const setMinValueAC = (e: number) => (
    {type: "SET-MIN-VALUE", minValue: e} as const
);
export const setTunerAC = () => (
    {type: "SET-TUNER"} as const
);

export type IncValueActionType = ReturnType<typeof incCounterValueAC>
export type SetValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorageAC>
export type IncResetValueType = ReturnType<typeof incResetValueAC>
export type SetMaxValueType = ReturnType<typeof setMaxValueAC>
export type SetMinValueType = ReturnType<typeof setMinValueAC>
export type SetTunerType = ReturnType<typeof setTunerAC>

type ActionType =
    IncValueActionType
    | SetValueFromLocalStorageType
    | IncResetValueType
    | SetMaxValueType
    | SetMinValueType
    | SetTunerType