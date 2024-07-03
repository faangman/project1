import s from './Header.module.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useState} from "react";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";

export const Header = () => {
    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(state => !state);
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={openHandler}>
            <List>
                {['Home', 'Users', 'User'].map((text, index) => (
                    <NavLink style={{textDecoration: "none", color: "inherit"}} to={text === "Home" ? "/" : "/cards"}>
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                ))}
            </List>
        </Box>
    );

    return (
        <div className={s.header}>
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
            <Button color="inherit">Login</Button>
            <Drawer open={open} onClose={openHandler}>
                {DrawerList}
            </Drawer>
        </div>
    )
}