import { Create, Home } from "@mui/icons-material";
import {

  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer, 
  useTheme,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import BedtimeSharpIcon from '@mui/icons-material/BedtimeSharp';
const Drawerr = ({ drawerWidth, setMymode }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem sx={{display:"flex",justifyContent:'center'}}>
          <IconButton
            onClick={() => {
              setMymode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            variant="contained"
            color="warning"
          >
            {theme.palette.mode === "light" ? (
              <WbSunnySharpIcon />
            ) : (
              <BedtimeSharpIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </ListItem>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/profile");
            }}
          >
            <ListItemIcon>
              <AccountCircleSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/setting");
            }}
          >
            <ListItemIcon>
              <SettingsApplicationsSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/logout");
            }}
          >
            <ListItemIcon>
              <LogoutSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default Drawerr;