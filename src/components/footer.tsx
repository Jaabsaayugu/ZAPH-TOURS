import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Link,
  useTheme,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { grey } from "@mui/material/colors";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: grey[900],
        color: theme.palette.common.white,
        pt: 6,
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h6" fontWeight={500}>
            © {new Date().getFullYear()} Zaph Tours. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </Link>
            <Link href="#" color="inherit" aria-label="YouTube">
              <YouTubeIcon />
            </Link>
            <Link href="#" color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
          </Stack>
        </Stack>
        <Divider sx={{ my: 3, borderColor: grey[800] }} />
        <Typography
          variant="body2"
          align="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          Made with{" "}
          <Link href="https://github.com/jaabsaayugu">
            {" "}
            <FavoriteIcon fontSize="small" color="error" />{" "}
          </Link>
          by Ayugu
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
