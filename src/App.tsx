import React from 'react';
import {Header} from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./store";
import {Login} from "./components/Login/Login";



function App() {

    const isLoggedIn = useSelector<StoreType, boolean>(state => state.app.isLoggedIn)
    const dispatch = useDispatch();

    if (!isLoggedIn) {
        return <Login />
    }

  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  );
}

export default App;
