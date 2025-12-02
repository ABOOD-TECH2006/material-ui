import React, { useState } from "react";
import "./Create.css";
import { Box, InputAdornment, TextField, IconButton } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import PaidIcon from "@mui/icons-material/Paid";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { purple } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import toast, { Toaster } from "react-hot-toast";
import { styled } from "@mui/material/styles";

const ColorButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.abood.main,
  "&:hover": {
    backgroundColor: theme.palette.abood.second,
  },
}));

const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  // Submit handler
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3100/mydata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          price: Number(data.price),
        }),
      });

      if (!res.ok) throw new Error("Failed to send data");

      toast.success("Transaction added successfully!");
      reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <Box
        autoComplete="off"
        sx={{
          position: "relative",
          pb: "50px",
          width: "35ch",
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* TITLE FIELD */}
        <TextField
          fullWidth
          label="Transaction Title"
          sx={{ m: 1 }}
          error={!!errors.title}
          helperText={errors.title ? errors.title.message : ""}
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
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters long",
            },
          })}
        />

        {/* PRICE FIELD */}
        <TextField
          fullWidth
          label="Amount"
          type="number"
          sx={{ m: 1 }}
          error={!!errors.price}
          helperText={errors.price ? errors.price.message : ""}
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
          {...register("price", {
            required: "Amount is required",
            min: {
              value: 1,
              message: "Amount must be greater than 0",
            },
          })}
        />

        {/* SUBMIT BUTTON */}
        <ColorButton
          type="submit"
          loading={loading}
          loadingPosition="end"
          sx={{ position: "absolute", left: 0, bottom: 0, paddingBlock: "5px" }}
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />}
        >
          Submit
        </ColorButton>
      </Box>
    </>
  );
};

export default Create;
