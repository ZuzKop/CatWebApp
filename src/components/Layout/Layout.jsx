import theme from "../../theme";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import ProfilePicture from "../../assets/kitusProfilePicture.jpeg";
import RandomCatContent from "../RadomCatContent";
import LayoutModuleCSS from "./Layout.module.css";

const Layout = () => {
  const drawerWidth = 280;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar color="inherit">
          <Typography variant="h4" color={theme.palette.primary.dark}>
            Random Cat Things
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <RandomCatContent />
      </Box>
    </Box>
  );
};

export default Layout;
