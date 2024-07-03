import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {Login} from "./components/Login/Login";
import {Card} from "./components/Cards/Card/Card";
import {Cards} from "./components/Cards/Cards";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/cards",
                element: (
                    <Cards />
                )
            },
            {
                path: "/cards/:id",
                element: (
                    <Card />
                )
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },

]);