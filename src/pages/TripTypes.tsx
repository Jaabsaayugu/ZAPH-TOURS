// import React from "react";
import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Typography,
  Button,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import tripTypes from "../data/tripTypes";

const TripTypes = () => (
  <Box
    sx={{
      minHeight: "100vh",
      background: "#FFFDD0",
      paddingTop: "64px",
    }}
  >
    <Paper
      sx={{
        background:
          "linear-gradient(to right,rgb(226, 149, 33),rgb(82, 64, 2))",
        color: "white",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Trip Types And Safaris
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.5 }}>
          "Venture into the Wild Beauty of Kenya & Its Neighbors"
        </Typography>
      </Container>
    </Paper>

    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{
            textDecoration: "none",
            "&:hover": {
              color: "Blue",
            },
          }}
        >
          Home
        </Link>
        <Typography sx={{ color: "Navy", fontWeight: "bold" }}>
          Trip Types
        </Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {tripTypes.map((trip) => (
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                borderRadius: 2,
                overflow: "hidden",
                width: { xs: 600, lg: 500, sm: 250, md: 400 },
                maxWidth: "100%",
                backgroundPosition: "center",
                margin: "auto",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={
                  Array.isArray(trip.images) ? trip.images[0] : trip.images
                }
                alt={trip.title}
              />
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  color="blue"
                >
                  {trip.title}
                </Typography>
                <Typography variant="body2" color="black" paragraph>
                  {trip.description}
                </Typography>

                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="caption" color="black" fontWeight="bold">
                    Duration:{" "}
                    <Typography
                      component="span"
                      variant="body2"
                      fontWeight="bold"
                      color="navy"
                    >
                      {trip.duration}
                    </Typography>
                  </Typography>
                </Box>

                <Typography variant="caption" color="Black" fontWeight="bold">
                  Price:{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                    color="navy"
                  >
                    {typeof trip.price === "string" ? (
                      trip.price
                    ) : trip.price && typeof trip.price === "object" ? (
                      <>
                        <span color="green">
                          ⭐ Standard: {trip.price.standard}
                        </span>
                        {trip.price.offer && (
                          <>
                            {" ⭐ "}
                            <span>Offer: {trip.price.offer}</span>
                          </>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </Typography>
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    background: "blue",
                    borderRadius: "24px",
                    py: 1,
                  }}
                >
                  Start Now
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TripTypes;
