import {combineReducers, createStore} from "redux";
import {UsersReducer} from "./UsersReducer";

export const RootReducer = combineReducers({
    users: UsersReducer
})

export const store = createStore(RootReducer);

export type StoreType = ReturnType<typeof store.getState>