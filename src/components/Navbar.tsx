import React from "react";
import {
  Typography,
  Toolbar,
  IconButton,
  AppBar,
  Button,
  Stack,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit"></IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Zaph Tours
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="https://github.com">
            Home
          </Button>
          <Button color="inherit" href="https://github.com">
            Features
          </Button>
          <Button color="inherit" href="https://github.com">
            About
          </Button>
          <Button color="inherit" href="https://github.com">
            Login
          </Button>
          <Button color="inherit" href="https://github.com">
            Sign Up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
