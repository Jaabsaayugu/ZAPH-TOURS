import { Container, Typography, Grid, Paper, Avatar, Box } from "@mui/material";

const testimonials = [
  {
    name: "Liam Nelson",
    location: "Dublin, Ireland",
    text: "An unforgettable journey through Tsavo! The landscapes, the animals, and the professionalism of Zaph Tours made it all seamless.",
    avatar: "LN",
  },
  {
    name: "Vin Diesel",
    location: "Vancouver, Canada",
    text: "I fell in love with Kenya’s coast — the colors, the people, the food. Zaph Tours brought it all together with flawless planning.",
    avatar: "VD",
  },
  {
    name: "Ravi Patel",
    location: "Mumbai, India",
    text: "The attention to detail was unmatched. From pickup to the final goodbye, every moment with Zaph Tours felt thoughtfully curated.",
    avatar: "RP",
  },
  {
    name: "Amelia Becker",
    location: "Cape Town, South Africa",
    text: "Zaph Tours gave us more than a holiday — it was a cultural immersion, an adventure, and a memory I’ll carry forever.",
    avatar: "AB",
  },
];

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" color="Navy" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        Get it from the Horse Mouth
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "48%",
                md: "30%",
              },
              maxWidth: 350,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: 350,
                background:
                  "linear-gradient(135deg, rgb(217, 113, 38), rgb(201, 137, 18))",
                color: "white",
                borderRadius: 4,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    background:
                      "linear-gradient(to right, rgb(226, 149, 33), rgb(223, 145, 97))",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {testimonial.avatar}
                </Avatar>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  “{testimonial.text}”
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  {testimonial.location}
                </Typography>
              </Box>
            </Paper>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
