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
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import BedtimeSharpIcon from '@mui/icons-material/BedtimeSharp';
const Drawerr = ({
  drawerWidth,
  setMymode,
  noneOrblock,
  DrawerType,
  HideDrawer,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocation = useLocation();
 const MyList = [
   { text: "Home", icon: <Home />, path: "/" },
   { text: "Create", icon: <Create />, path: "/Create" },
   { text: "Profile", icon: <AccountCircleSharpIcon />, path: "/Profile" },
   {
     text: "Setting",
     icon: <SettingsApplicationsSharpIcon />,
     path: "/Setting",
   },
 ];
  return (
    <Box component="nav">
      <Drawer
        sx={{
          width: drawerWidth,
          display: { xs: noneOrblock, sm: "block" },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={DrawerType}
        anchor="left"
        open={true}
        onClose={() => {
          HideDrawer();
        }}
      >
        <List>
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentmode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
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
          {MyList.map((item, i) => {
            return (
              <ListItem
                key={i}
                sx={{
                  bgcolor:
                    currentLocation.pathname === item.path
                      ? theme.palette.abood.second
                      : null,
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem
            sx={{
              bgcolor:
                currentLocation.pathname === "/logout"
                  ? theme.palette.abood.second
                  : null,
            }}
            disablePadding
          >
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
    </Box>
  );
};
export default Drawerr;