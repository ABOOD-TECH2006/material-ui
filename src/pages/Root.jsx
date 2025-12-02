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
import { purple,teal } from "@mui/material/colors";
import { useState } from "react";
import { createTheme } from "@mui/material";

const drawerWidth = 240;
const Root = () => {
    const [mode, setMymode] = useState(
      localStorage.getItem("currentmode") === null
        ? "light"
        : localStorage.getItem("currentmode") === "light" ? "light" : "dark"
    );
    const darkTheme = createTheme({
      palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
          ? { abood: { main: purple[500], second: "#42a5f5" } }
          : {
              abood: {
                main: teal,
                second: "purple",
              },
            }),
      },
    });
        //     abood: {
        //   main: purple[500],
        //   second: "#42a5f5",
        // },
        const [noneOrblock,setnoneOrblock] = useState("none")
        const [DrawerType, setDrawerType] = useState("permanent");
        const ShowDrawer = ()=>{
                setDrawerType("temporary ");
                setnoneOrblock("block");
        }
              const HideDrawer = ()=>{
                        setDrawerType("permanent ");
                
                        setnoneOrblock("none");
              }
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Typography mt={10} variant="h4" component={"p"} color="initial">ABOOD</Typography>
            <Button sx={{mr:"auto",ml:"auto",display:"flex"}} endIcon={<KeyboardDoubleArrowRightIcon/>} variant="outlined" color="primary">
              Click here
            </Button>
            <IconButton size="small" color="error">
              <MenuSharpIcon fontSize="small"/>
            </IconButton> */}
      <Appbar
        {...{ ShowDrawer, drawerWidth }}
        ShowDrawer={ShowDrawer}
        drawerWidth={drawerWidth}
      />
      <Drawer
        {...{ HideDrawer, DrawerType, noneOrblock, drawerWidth, setMymode }}
        // HideDrawer={HideDrawer}
        // DrawerType={DrawerType}
        // noneOrblock={noneOrblock}
        // drawerWidth={drawerWidth}
        // setMymode={setMymode}
      />
      <Box
        component="main"
        sx={{
          ml: { xs: 0, sm: `${drawerWidth}px` },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
};
export default Root;
