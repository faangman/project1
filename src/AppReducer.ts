import {FetchCardAC} from "./CardReducer";


const initialState= {
    isLoggedIn: false,
    isLoading: false,
    isInitialized: false,
    userId: null
}

type AppStateType = {
    isLoggedIn: boolean,
    isLoading: boolean,
    isInitialized: boolean,
    userId: null | number
}

export const AppReducer = (state: AppStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_IS_LOGGEDIN": {
            return {
                ...state,
                isLoggedIn: action.log
            }
        }
        case "SET_IS_INITIALIZED": {
            return {
                ...state,
                isInitialized: action.status,
                }
            }
        case "SET_USER_ID": {
            return {
                ...state,
                userId: action.userId
            }
        }
        default: return state;
    }
}

type ActionType = ReturnType<typeof SetIsLoggedInAC> | ReturnType<typeof SetIsInitializedAC> | ReturnType<typeof SetUserIdAC>

export const SetIsLoggedInAC = (log: boolean) => {
    return {
        type: "SET_IS_LOGGEDIN",
        log
    } as const
}

export const SetIsInitializedAC = (status: boolean) => {
    return {
        type: "SET_IS_INITIALIZED",
        status
    } as const
}

export const SetUserIdAC = (userId: number) => {
    return {
        type: "SET_USER_ID",
        userId
    } as const
}