import { Box, Grid, Container, Typography, Card, Button } from "@mui/material";

const featuredDestinations = [
  {
    name: "Mt. Kenya",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    description: "Africa's second highest peak with alpine scenery and hiking.",
    price: "$1,200",
  },
  {
    name: "Mt. Ruwenzori",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    description: "The legendary Mountains of the Moon with unique flora.",
    price: "$1,800",
  },
  {
    name: "Lake Nakuru",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    description: "Famous for flamingos and bird species around the lake.",
    price: "$450",
  },
  {
    name: "Tsavo National Park",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    description: "Kenya's largest national park with red elephants and lions.",
    price: "$680",
  },
  {
    name: "Nairobi National Park",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
    description: "Urban park with wildlife and city skyline backdrop.",
    price: "$280",
  },
  {
    name: "Coastal Kenya",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "White sand beaches, coral reefs, and rich Swahili culture.",
    price: "$850",
  },
];

const FeaturedDestinations = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #rgb(226, 149, 33) 0%,rgb(216, 207, 122) 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ mb: 3 }}>
          Featured Destinations
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {featuredDestinations.map((dest, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: 250, md: 350 },
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  width: 300,
                  maxWidth: 350,
                  boxShadow: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    // width: { xs: 500, md: 250 },
                    height: { xs: 200, md: 250 },
                    backgroundImage: `url(${dest.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: 0,
                  }}
                />
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#rgb(226, 149, 33)", mb: 1 }}
                  >
                    {dest.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, lineHeight: 1.6, flexGrow: 1 }}
                  >
                    {dest.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#rgb(226, 149, 33)", fontWeight: "bold" }}
                    >
                      From {dest.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        background:
                          "linear-gradient(to right, #rgb(226, 149, 33),rgb(230, 161, 119))",
                        borderRadius: "20px",
                        px: 2,
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #rgb(226, 149, 33),rgb(168, 174, 228))",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
