import { Outlet } from "react-router-dom";
// import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import IconButton from '@mui/material/IconButton';
// import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Appbar from "MUI-Component/Appbar";
import Drawer from "MUI-Component/Drawer";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { createTheme } from "@mui/material";

const drawerWidth = 240;
const Root = () => {
    const [Mymode, setMymode] = useState("light");
    const darkTheme = createTheme({
      palette: {
        // @ts-ignore
        mode: Mymode,
        // @ts-ignore
        abood: {
          main: purple[500],
          second: "#42a5f5",
        },
      },
    });
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Typography mt={10} variant="h4" component={"p"} color="initial">ABOOD</Typography>
            <Button sx={{mr:"auto",ml:"auto",display:"flex"}} endIcon={<KeyboardDoubleArrowRightIcon/>} variant="outlined" color="primary">
              Click here
            </Button>
            <IconButton size="small" color="error">
              <MenuSharpIcon fontSize="small"/>
            </IconButton> */}
      <Appbar drawerWidth={drawerWidth} />
      <Drawer drawerWidth={drawerWidth} setMymode={setMymode} />
      <Box
        component="main"
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
};
export default Root;
