import { Box, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
        mt: 1,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "flex-start",
          paddingTop: "50vh",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 2,
          position: "relative"
        }}
      >
        <Container maxWidth="md" >
          <Typography
            variant="h2"
            gutterBottom
            fontFamily={" sans-serif"}
            borderBottom={3}
          >
            Zaph Tours
          </Typography>
          <Typography variant="h4" gutterBottom>
            Best Safaris and Adventures
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
