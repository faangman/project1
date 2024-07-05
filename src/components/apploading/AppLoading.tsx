import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

export const AppLoading = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', justifyContent: "center", alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    )
}