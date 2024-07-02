import {UserCard} from "../UserCard/UserCard";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../store";
import {fetchUsersAC, UserType} from "../../UsersReducer";
import {API} from "../../api/api";
import s from './Cards.module.css'

export const Cards = () => {

    const users = useSelector<StoreType, UserType[]>(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        API.getUsers().then(res => {
            dispatch(fetchUsersAC(res.data.items));
        })
    }, []);


    return (
        <div className={s.cardscontainer}>
            {users.map(user => {
                return <UserCard
                    name={user.name}
                    id={user.id}
                    photos={user.photos}
                    status={user.status}
                    followed={user.followed}
                />
            })}
        </div>

    )
}