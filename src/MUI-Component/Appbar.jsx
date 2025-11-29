import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Stack,
  Link,

} from "@mui/material";
const Appbar = ({drawerWidth}) => {
  return (
    <AppBar
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
      position="static"
    >
      <Toolbar>
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