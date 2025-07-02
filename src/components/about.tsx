import { Grid3x3 } from "@mui/icons-material";
import { Box, Typography, Grid, Chip, Container } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        About Zaph Tours
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#rgb(226, 149, 33)", mb: 3 }}
          >
            Your Are About To Enjoy
          </Typography>
          <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
            Welcome to Zaph Tours — where the wild heart of Kenya meets the soul
            of discovery. We’re not just a travel company — we’re your personal
            storytellers, trailblazers, and safari soulmates. For over a decade,
            Zaph Tours has been crafting extraordinary journeys through Kenya’s
            most breathtaking landscapes, from the golden savannahs of the
            Maasai Mara to the crystal-blue waters of Diani Beach.
          </Typography>
          <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
            Whether you're tracking lions at dawn, standing beneath the
            snow-capped peaks of Mount Kenya, or sharing a sunset with elephants
            in Tsavo, we transform your bucket list into unforgettable memories.
            Led by passionate local guides and travel experts, every adventure
            is authentic, safe, and tailored to your wildest dreams. This isn’t
            just travel — it’s a deep dive into Africa’s raw beauty, vibrant
            culture, and untamed soul.
          </Typography>
          <Typography sx={{ lineHeight: 1.8, mb: 3 }}>
            ✨ Zaph Tours — Kenya Begins Where Ordinary Ends.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Chip
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src="https://images.pexels.com/photos/29284339/pexels-photo-29284339.jpeg"
                    alt="Tour Guide"
                    style={{ width: 20, height: 20 }}
                  />
                  Expert Guides
                </Box>
              }
              sx={{
                background: "linear-gradient(to right,  #E29521, #DB9B73)",
                color: "white",
                px: 4,
                py: 4,
              }}
            />
            <Chip
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src="https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg"
                    alt="Lion"
                    style={{ width: 20, height: 20 }}
                  />
                  Excellent Views
                </Box>
              }
              sx={{
                background: "linear-gradient(to right,  #E29521, #DB9B73)",
                color: "white",
                px: 4,
                py: 4,
              }}
            />
            <Chip
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg"
                    alt="Money"
                    style={{ width: 20, height: 20 }}
                  />
                  Pocket Freindly
                </Box>
              }
              sx={{
                background: "linear-gradient(to right,  #E29521, #DB9B73)",
                color: "white",
                px: 4,
                py: 4,
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
