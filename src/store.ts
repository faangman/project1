import {combineReducers, createStore} from "redux";
import {UsersReducer} from "./UsersReducer";
import {CardReducer} from "./CardReducer";
import {AppReducer} from "./AppReducer";

export const RootReducer = combineReducers({
    users: UsersReducer,
    user: CardReducer,
    app: AppReducer,
})

export const store = createStore(RootReducer);

export type StoreType = ReturnType<typeof store.getState>