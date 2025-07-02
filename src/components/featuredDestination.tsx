import { Box, Grid, Container, Typography, Card, Button } from "@mui/material";

const featuredDestinations = [
  {
    name: "Tsavo National Park",
    image:
      "https://images.pexels.com/photos/18341011/pexels-photo-18341011.png",
    description:
      "One of the best international game reserves that has uncountable animals at sight.",
    price: "$1,200",
  },
  {
    name: "Mt. Ruwenzori",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    description:
      "Journey through the enigmatic Ruwenzori Mountains, where otherworldly plants thrive amidst towering peaks.",
    price: "$1,800",
  },
  {
    name: "Lake Nakuru",
    image:
      "https://images.pexels.com/photos/20620394/pexels-photo-20620394.png",
    description:
      "Renowned for its vibrant flamingos and diverse bird life along its scenic shores.",
    price: "$450",
  },
  {
    name: "Mt. Kenya",
    image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    description: "A Sacred Peak and Symbol of Kenyan Identity.",
    price: "$680",
  },
  {
    name: "Nairobi National Park",
    image:
      "https://images.pexels.com/photos/46790/leopard-wildcat-big-cat-botswana-46790.jpeg",
    description:
      "Experience wild Africa just minutes from the city in this remarkable urban sanctuary.",
    price: "$280",
  },
  {
    name: "Coastal Kenya",
    image: "https://images.pexels.com/photos/2041928/pexels-photo-2041928.jpeg",
    description:
      "Golden shores, underwater treasures, and the soul of Swahili tradition.",
    price: "$850",
  },
];

const FeaturedDestinations = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, rgb(226, 149, 33) 0%, rgb(216, 207, 122) 100%)",
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
            <Box
              key={i}
              sx={{
                flex: {
                  xs: " 100%",
                  sm: " 48%",
                  md: "30%",
                },
                maxWidth: 350,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  width: "100%",
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
                    height: { xs: 200, md: 250 },
                    backgroundImage: `url(${dest.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                    sx={{ color: "rgb(226, 149, 33)", mb: 1 }}
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
                      sx={{ color: "rgb(226, 149, 33)", fontWeight: "bold" }}
                    >
                      From {dest.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        background:
                          "linear-gradient(to right, rgb(226, 149, 33), rgb(230, 161, 119))",
                        borderRadius: "20px",
                        px: 2,
                        "&:hover": {
                          background:
                            "linear-gradient(to right, rgb(226, 149, 33), rgb(209, 211, 229))",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
