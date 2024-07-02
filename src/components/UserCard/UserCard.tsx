import {UserType} from "../../UsersReducer";
import s from './usercard.module.css'
import defaultava from '../../assets/images/defaultlogo.jpeg'

type Props = UserType
export const UserCard = ({id, status, name, followed, photos}: Props) => {

    return (
        <div className={s.usercard}>
            <img className={s.img} src={defaultava} alt="ava"/>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Followed: {followed}</div>
            <div>Photo large: {photos.large}</div>
            <div>Photo small: {photos.small}</div>
        </div>
    )
}