import React from "react";
import "./Home.css"
import { Box,Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
const Home = ()=>{
    return (
      <Box>
        <Paper
          sx={{
            width: "366px",
            mt: "22px",
            mb: "7px",
            display: "flex",
            justifyContent: "space-between",
            pt: "30px",
            pb:"10px",
            position: "relative",
            paddingInline:"10px"
          }}
        >
          <Typography variant="h6">GYM</Typography>
          <Typography sx={{opacity:0.8}} variant="h6">$100</Typography>
          <IconButton sx={{ position: "absolute", right: 0, top: 0 }}>
            <Close />
          </IconButton>
        </Paper>
      </Box>
    );
}
export default Home