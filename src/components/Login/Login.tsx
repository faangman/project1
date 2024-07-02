import s from './Login.module.css'
import {Button, Checkbox, TextField} from "@mui/material";

export const Login = () => {
    return (
        <div className={s.logincontainer}>
            <div>Welcome!</div>
            <TextField id="outlined-basic" label="login" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
            <Checkbox  />
            <Button variant="contained">Login</Button>
        </div>
    )
}