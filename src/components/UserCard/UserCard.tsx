import {UserType} from "../../UsersReducer";
import s from './usercard.module.css'
import defaultava from '../../assets/images/defaultlogo.jpeg'
import {Navigate} from "react-router-dom";

type Props = UserType

export const UserCard = ({id, status, name, followed, photos}: Props) => {

    const onClickHAndler = () => {
        return <Navigate to={`/${id}`}/>
    }

    return (
        <div className={s.usercard} onClick={onClickHAndler}>
            <img className={s.img} src={photos.small || defaultava} alt="ava"/>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Status: {status || "no status"}</div>
            <div>Followed: {followed || "no"}</div>
            <div>Photo large: {photos.large ? "yes" : "no"}</div>
            <div>Photo small: {photos.small ? "yes" : "no"}</div>
        </div>
    )
}