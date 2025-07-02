// import React from "react";
import { Container, Typography, Grid, Paper, Avatar, Box } from "@mui/material";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    text: "Zaph Tours made our Kenya safari absolutely magical! The guides were knowledgeable and the wildlife viewing was incredible.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Sydney, Australia",
    text: "Mt. Kenya trek with Zaph Tours was the adventure of a lifetime! Professional service and breathtaking views.",
    avatar: "MC",
  },
  {
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    text: "The coastal Kenya tour exceeded all expectations. Beautiful beaches, amazing culture, and excellent hospitality!",
    avatar: "ER",
  },
  {
    name: "Alex Njeri",
    location: "Nairobi, Kenya",
    text: "Incredible experience from booking to the last day. Highly recommend Zaph Tours for both local and international adventures!",
    avatar: "AN",
  },
];

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        What Our Travelers Say
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 0.1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: 220,
                // height: 300,
                maxWidth: 360,
                background:
                  "linear-gradient(135deg,rgb(205, 209, 230) 0%,rgb(187, 169, 87) 100%)",
                color: "white",
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    background:
                      "linear-gradient(to right, #rgb(226, 149, 33),rgb(223, 145, 97))",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginTop: 2,
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
                    minHeight: "90px",
                  }}
                >
                  "{testimonial.text}"
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.85, marginBottom: 2 }}
                >
                  {testimonial.location}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
