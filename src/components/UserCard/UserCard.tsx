import {UserType} from "../../UsersReducer";
import s from './usercard.module.css'

type Props = UserType
export const UserCard = ({id, status, name, followed, photos}: Props) => {

    return (
        <div className={s.usercard}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Followed: {followed}</div>
            <div>Photo large: {photos.large}</div>
            <div>Photo small: {photos.small}</div>
        </div>
    )
}