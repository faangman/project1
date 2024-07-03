import {combineReducers, createStore} from "redux";
import {UsersReducer} from "./UsersReducer";
import {CardReducer} from "./CardReducer";

export const RootReducer = combineReducers({
    users: UsersReducer,
    user: CardReducer
})

export const store = createStore(RootReducer);

export type StoreType = ReturnType<typeof store.getState>