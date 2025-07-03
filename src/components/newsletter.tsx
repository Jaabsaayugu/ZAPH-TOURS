import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
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
            color="Navy"
            gutterBottom
            padding={2}
          >
            Keep In Touch
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
                  "linear-gradient(to right, rgb(226, 149, 33), rgb(229, 122, 56))",
                borderRadius: "30px",
                px: 2,
                "&:hover": {
                  background:
                    "linear-gradient(to right, rgb(226, 149, 33), rgb(178, 99, 8))",
                },
              }}
            >
              Subscribe to Newsletter
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message=" Welcome to the Zaph Tours family!"
      /> */}
      {/* </Snackbar> */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Welcome to the Zaph Tours family!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Newsletter;
