import theme from "../../theme";
import {AppBar, Avatar, Box, Drawer, Toolbar, Typography} from "@mui/material";
import ProfilePicture from '../../assets/kitusProfilePicture.jpeg';
import RandomCatContent from "../RadomCatContent";
import LayoutModuleCSS from "./Layout.module.css"

const Layout = () => {

    const drawerWidth = 280;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar
                color="inherit">
                    <Typography variant="h4" color={theme.palette.primary.dark}>
                        Kituś Kopczyński-Krajniewski
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}>
                <Toolbar />
                
                <Box 
                className={LayoutModuleCSS.avatarBox}
                >
                    <Avatar
                        alt="Kituś"
                        src={ProfilePicture}
                        sx={{ 
                            width: "250px", 
                            height: "250px",
                        }}
                        /> 
                </Box>
               
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <RandomCatContent />
            </Box>

        </Box>
        )    
}

export default Layout;