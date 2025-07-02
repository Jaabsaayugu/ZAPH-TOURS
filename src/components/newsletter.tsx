import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSnackbarOpen(true);
      setEmail("");
      setName("");
    }
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, #rgb(226, 149, 33),rgb(179, 184, 230))",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={5}
          sx={{ p: 6, borderRadius: 3, textAlign: "center" }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#rgb(226, 149, 33)", mb: 3 }}
          >
            Stay Updated with Zaph Tours
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#666" }}>
            Subscribe to our newsletter for weekly updates on safari adventures,
            travel tips, and exclusive offers!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 400, mx: "auto" }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 3 }}
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 4 }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                background:
                  "linear-gradient(to right, #rgb(226, 149, 33),rgb(235, 161, 115))",
                borderRadius: "30px",
                py: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  background:
                    "linear-gradient(to right, #rgb(226, 149, 33),rgb(162, 169, 231))",
                  transform: "scale(1.05)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Subscribe to Newsletter
            </Button>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message="Thank you for subscribing! Welcome to the Zaph Tours family!"
      />
    </Box>
  );
};

export default Newsletter;
