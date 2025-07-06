// A card containing the following:
// An Image of the destination
// The name of the destination
// A short description of thr destination
// A link to a detailed page of the destinayion
// Price per group
// Price per individualIndividuals
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
} from "@mui/material";
import destinations from "../data/destinations";

const DestinationsPage = () => (
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
            "linear-gradient(to right, rgb(226, 149, 33),rgb(99, 65, 6))",
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
                    height: 250,
                    background: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                ></Box>

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
                          background: "grey",
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
                        background: "Navy",
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


export default DestinationsPage;
