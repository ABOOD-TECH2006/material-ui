import React from "react";
import "./Create.css"
import { Box, InputAdornment, TextField, IconButton, Button, styled } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import PaidIcon from "@mui/icons-material/Paid";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { purple } from "@mui/material/colors";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.abood.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.abood.second,
  },
}));
const Create = ()=>{
    return (
      <Box
        sx={{
          position: "relative",
          pb:"50px",
        //   border: "red solid ",
          width: "35ch",
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="form"
      >
        <TextField
          fullWidth
          label="Transaction Title"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <InfoOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          fullWidth
          label="Amount"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <PaidIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <ColorButton
          sx={{ position: "absolute", left: 0, bottom: 0 ,paddingBlock:"0px"}}
          variant="contained"
        >
          Submit
          <IconButton>
            <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
          </IconButton>
        </ColorButton>
      </Box>
    );
}
export default Create