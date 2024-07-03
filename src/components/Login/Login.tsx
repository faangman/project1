import s from './Login.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {API} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {SetIsLoggedInAC} from "../../AppReducer";
import App from "../../App";
import {StoreType} from "../../store";

export type Inputs = {
    email: string,
    password: string,
    rememberMe: boolean
};

export const Login = () => {
    const isLoggedIn = useSelector<StoreType, boolean>(state => state.app.isLoggedIn);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        API.login(data).then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(SetIsLoggedInAC(true))
            }
        })
    };

    if (isLoggedIn) {
        return <App/>
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className={s.loginpage}>
                <TextField {...register("email")} id="outlined-basic" label="email" variant="outlined" />
                <TextField {...register("password")} id="outlined-basic" label="password" variant="outlined" type="password" />
                <FormControlLabel {...register("rememberMe")} control={<Checkbox />} label="remember Me" />
                <Button variant="contained" type={"submit"}>Login</Button>
            </form>
    )
}