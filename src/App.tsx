import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./store";
import {Login} from "./components/Login/Login";
import {API} from "./api/api";
import {SetIsInitializedAC, SetIsLoggedInAC, SetUserIdAC} from "./AppReducer";
import {AppLoading} from "./components/apploading/AppLoading";



function App() {

    const isLoggedIn = useSelector<StoreType, boolean>(state => state.app.isLoggedIn)
    const dispatch = useDispatch();
    const isInitialized = useSelector<StoreType, boolean>(state => state.app.isInitialized);

    useEffect(() => {
        API.auth().then((res) =>{
            if (res.data.resultCode === 0) {
                dispatch(SetIsLoggedInAC(true))
                dispatch(SetUserIdAC(res.data.data.id))
            }
            dispatch(SetIsInitializedAC(true))
        })
    }, [])

    if (!isInitialized) {
        return <AppLoading/>
    }

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
