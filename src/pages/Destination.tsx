// A card containing the following:
// An Image of the destination
// The name of the destination
// A short description of thr destination
// A link to a detailed page of the destinayion
// Price per group
// Price per individualIndividuals
import { useState } from "react";
import {
  Box,
  Container,
  Card,
  Paper,
  Typography,
  Button,
  Chip,
  Breadcrumbs,
  Link,
  Pagination,
} from "@mui/material";


const DestinationsPage = () => {
  const destinations = [
    {
      name: "Hell's Gate National Park",
      image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
      description:
        "Known for its dramatic cliffs, gorges, hot springs, and geothermal activity. A paradise for rock climbers, cyclists, and hikers.",
      groupPrice: "$1000",
      pricePerPerson: "$800",
    },
    {
      name: "Mt. Longonot",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "The legendary Mountains craters with unique flora, glaciers, and challenging trekking routes through mystical landscapes.",
      groupPrice: "$1,800",
      pricePerPerson: "$2,400",
    },
    {
      name: "Diani Beach",
      image:
        "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
      description:
        "Voted one of Africa’s best beaches, Diani features white sands, palm trees, vibrant nightlife, and a stunning turquoise ocean.",
      groupPrice: "$850",
      pricePerPerson: "$350",
    },
    {
      name: "Lamu Island",
      image:
        "https://images.pexels.com/photos/30282791/pexels-photo-30282791.jpeg",
      description:
        " A peaceful island frozen in time with Swahili architecture, dhow cruises, and narrow alleys. Ideal for cultural immersion.",
      groupPrice: "$2000",
      pricePerPerson: "$1000",
    },
    {
      name: "Menengai Crater",
      image:
        "https://images.pexels.com/photos/96457/pexels-photo-96457.jpeg",
      description:
        "One of the largest volcanic craters in the world with lush greenery and spectacular views over the Rift Valley.",
      groupPrice: "$1255",
      pricePerPerson: "$555",
    },
    {
      name: "Ol Pejeta Conservancy",
      image:
        "https://images.pexels.com/photos/12029294/pexels-photo-12029294.jpeg",
      description:
        "A leading wildlife conservancy and sanctuary for the last two northern white rhinos. Great for Big Five safaris and conservation tours.",
      groupPrice: "$11150",
      pricePerPerson: "$9150",
    },
    {
      name: "Chalbi Desert",
      image:
        "https://images.pexels.com/photos/53537/caravan-desert-safari-dune-53537.jpeg",
      description:
        "Kenya’s only true desert – vast, hauntingly beautiful, and home to the Gabra nomadic culture and salt pans.",
      groupPrice: "$20000",
      pricePerPerson: "$19000",
    },
    {
      name: "Aberdare Ranges",
      image:
        "https://images.pexels.com/photos/30688450/pexels-photo-30688450.jpeg",
      description:
        " Misty forests, waterfalls, bamboo zones, and rare wildlife including bongos and leopards. Great for hiking and nature lovers.",
      groupPrice: "$25000",
      pricePerPerson: "$17000",
    },
  ];



  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#FFFDD0",
        paddingTop: "64px",
      }}
    >
      <Paper
        sx={{
          background: "linear-gradient(to right, rgb(226, 149, 33),rgb(99, 65, 6))",
          color: "white",
          borderRadius: 10,
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            "The Best of Kenya — Curated for You"
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Let your journey be as extraordinary as the destination.
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link
            color="inherit"
            href="#"
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
            Destinations
          </Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {destinations.map((destination, index) => (
            <Box key={index}>
              <Card
                sx={{
                  width: { xs: 450, sm: 330, md: 439, lg: 559, xl: 560 },
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "15px",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 700,
                    background: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                </Box>

                <Box
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      color: "Navy",
                      fontWeight: "bold",
                    }}
                  >
                    {destination.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      mb: 3,
                      lineHeight: 1.6,
                      color: "black",
                    }}
                  >
                    {destination.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#rgb(226, 149, 33)",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      The Price:
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                    >
                      <Chip
                        label={`Group: ${destination.groupPrice}`}
                        sx={{
                          background:
                            "grey",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                      <Chip
                        label={`Individual: ${destination.pricePerPerson}`}
                        sx={{
                          background: "Black",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    href="#destination-details"
                    sx={{
                      background: "Blue",
                      borderRadius: "30px",
                      py: 1.5,
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "Navy",
                        transform: "scale(1.05)",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DestinationsPage;
