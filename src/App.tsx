import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./store";
import {fetchUsersAC, UserType} from "./UsersReducer";
import {API} from "./api/api";

function App() {

    const users = useSelector<StoreType, UserType[]>(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        API.getUsers().then(res => {
            dispatch(fetchUsersAC(res.data.items));
        })
        // dispatch(fetchUsersAC(pseudoUsers))
    }, []);

  return (
    <div className="App">
      Hello!
        <ol>
            {users.map(user => {
                return <li key={user.id}>{user.id}</li>
            })}
        </ol>
        <div>
            Users count: 0
        </div>
    </div>
  );
}

export default App;
