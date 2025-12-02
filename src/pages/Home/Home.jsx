import React, { useEffect, useState } from "react";
import "./Home.css";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
const Home = () => {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);

  // const [totalPrice,settotalPrice] = useState(0)
  let total = 0;
  return (
    <Box>
      {mydata.map((item) => {
         const handleDelete = () => {
           fetch(`http://localhost:3100/mydata/${item.id}`, {
             method: "DELETE",
           });
           const newArr = mydata.filter((Myobject) => {
             return Myobject.id !== item.id;
           });
           setmydata(newArr);
         };
        total += item.price
        return (
          <Paper
            key={item.id}
            sx={{
              width: "366px",
              mt: "22px",
              mb: "7px",
              display: "flex",
              justifyContent: "space-between",
              pt: "30px",
              pb: "10px",
              position: "relative",
              paddingInline: "10px",
            }}
          >
            <Typography variant="h6">{item.title}</Typography>
            <Typography sx={{ opacity: 0.8 }} variant="h6">
              $ {item.price}
            </Typography>
            <IconButton
              onClick={handleDelete}
              sx={{ position: "absolute", right: 0, top: 0 }}
            >
              <Close />
            </IconButton>
          </Paper>
        );

      })}
                  <Typography sx={{mt:"50px"}} variant="h4">
                <Typography variant="h4">
                     💲Total price is :  {total}
                </Typography>
            </Typography>
    </Box>
  );
};
export default Home;
