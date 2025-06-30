import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Zaph Tours
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/destinations">
          Destinations
        </Button>
        <Button color="inherit" component={Link} to="/trip-types">
          Trip Types
        </Button>
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
        <Button color="inherit" component={Link} to="/contact-us">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default header;
