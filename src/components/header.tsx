import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function header() {
  const navLinkStyle = {
    color: "inherit",
    textTransform: "none",
    fontWeight: "bold",
    mx: 1,
    transition: "all 0.3s ease",
    "&:hover": {
      color: "rgb(222, 190, 142)",
      transform: "scale(1.05)",
      boxShadow: "0px 4px 8px rgb(222, 190, 142)",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#001f3f",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Zaph Tours
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={navLinkStyle}>
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/destinations"
          sx={navLinkStyle}
        >
          Destinations
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/tripTypes"
          sx={navLinkStyle}
        >
          Trip Types
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contactUs"
          sx={navLinkStyle}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default header;
