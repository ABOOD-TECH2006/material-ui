import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "89vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e0e7ff 100%)",
        px: 2,
      }}
    >
      <Box
        sx={{
          mb: 4,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "4rem",
          fontWeight: "bold",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        404
      </Box>
      <Typography
        variant="h3"
        sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
      >
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/")}
        sx={{
          px: 4,
          py: 1.5,
          fontWeight: "bold",
          textTransform: "none",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #556cd6 0%, #5a3f8d 100%)",
          },
        }}
      >
        Go Home
      </Button>
    </Container>
  );
}

export default NotFoundPage;
