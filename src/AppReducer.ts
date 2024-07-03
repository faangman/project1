

const initialState= {
    isLoggedIn: false,
    isLoading: false,
    isInitialized: false,
}

type AppStateType = typeof initialState;

export const AppReducer = (state: AppStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_ISLOGGEDIN": {
            return {
                ...state,
                isLoggedIn: action.log,
            }
        }
        default: return state;
    }
}

type ActionType = ReturnType<typeof SetIsLoggedInAC>

export const SetIsLoggedInAC = (log: boolean) => {
    return {
        type: "SET_ISLOGGEDIN",
        log
    } as const
}