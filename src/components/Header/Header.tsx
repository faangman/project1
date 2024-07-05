import s from './Header.module.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState} from "react";
import {alpha, IconButton, InputBase, styled, SvgIcon, SvgIconProps, Switch} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Navigate, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SetIsLoggedInAC} from "../../AppReducer";
import {API} from "../../api/api";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {StoreType} from "../../store";


function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}



export const Header = () => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const userId = useSelector<StoreType, null | number>(state => state.app.userId);

    const openHandler = () => {
        setOpen(state => !state);
    }

    const logutHandler = () => {
        API.logout().then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(SetIsLoggedInAC(false))
            }
        })
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={openHandler}>
            <List>
                {['Home', 'Users', 'User'].map((text, index) => (
                    <NavLink style={{textDecoration: "none", color: "inherit"}} to={text === "Home" ? "/" : "/cards"}>
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                ))}
            </List>
        </Box>
    );

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [click, setClick] = useState(false)

    const onClickHAndler = () => {
        setClick(true)
    }

    if (click) {
        return <Navigate to={`/cards/${userId}`}/>
    }

    return (
        <div className={s.header}>
            <div>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={openHandler}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <div>
                <Switch {...label}/>
                <IconButton onClick={onClickHAndler}>
                    <AccountCircleIcon />
                </IconButton>
                <Button color="inherit" onClick={logutHandler}>Logout</Button>
                {userId}
            </div>
            <Drawer open={open} onClose={openHandler}>
                {DrawerList}
            </Drawer>
        </div>
    )
}