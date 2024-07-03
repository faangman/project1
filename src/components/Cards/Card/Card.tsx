import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {API} from "../../../api/api";
import s from './card.module.css'
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../store";
import {CardType, FetchCardAC} from "../../../CardReducer";

export const Card = () => {
    const {id} = useParams();
    const user = useSelector<StoreType, CardType>(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    return (
        <div className={s.cardcontainer}>
            <div>User ID: {user.userId}</div>
            <div>Full Name: {user.fullName}</div>
            <div>Looking for a job: {user.lookingForAJob}</div>
            <div>Jod Description: {user.lookingForAJobDescription}</div>
            <div>Contacts: </div>
            <div>facebook: {user.contacts.facebook}</div>
            <div>github: {user.contacts.github}</div>
            <div>vk: {user.contacts.vk}</div>
            <div>instagram: {user.contacts.instagram}</div>
            <div>twitter: {user.contacts.twitter}</div>
            <div>website: {user.contacts.website}</div>
            <div>mainLink: {user.contacts.mainLink}</div>
            <div>youtube: {user.contacts.youtube}</div>
            <div>Photo:</div>
            <div>small: {user.photos.small}</div>
            <div>large: {user.photos.large}</div>
        </div>
    )
}