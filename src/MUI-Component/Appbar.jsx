import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Stack,
  Link, IconButton,

} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
const Appbar = ({ drawerWidth, ShowDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px`, xs: 0 },
      }}
      position="static"
    >
      <Toolbar sx={{ pl: 0 }}>
        <IconButton
          onClick={() => {
            ShowDrawer()
          }}
          sx={{ color: "white", display: { sm: "none" } }}
        >
          <MenuSharpIcon />
        </IconButton>
        <Link sx={{ flexGrow: 1 }} underline="none" color="inherit" href="/">
          My expenses
        </Link>

        <Typography
          mr={1}
          variant="h6"
          color="p"
          sx={{
            "&:hover": {
              color: "silver",
              transition: "ease 0.5s",
              cursor: "pointer",
            },
          }}
        >
          Mohammed
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Appbar;