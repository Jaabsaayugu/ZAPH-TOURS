import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Link,
  Breadcrumbs,
} from "@mui/material";
const Contact = () => {
  return (
    <Container>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          color="inherit"
          href="/"
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
          Contact Us
        </Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={16}
        sx={{ width: "100%", mt: 4 }}
      >
        <Box flex={1}>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Subject"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 4, color: "gold", backgroundColor: "navy" }}
            >
              Send Message
            </Button>
          </form>
        </Box>

        <Box flex={1}>
          <Typography variant="h6" color="navy">
            Contact Info
          </Typography>
          <Typography>Email: info@zaphtours.co.ke</Typography>
          <Typography>Phone: +254 799715875</Typography>
          <Typography>Address: Nairobi, Kenya</Typography>

          <Box mt={6}>
            <Typography variant="h6" color="navy">
              Office Hours
            </Typography>
            <Typography>Mon - Fri: 9am - 5pm</Typography>
            <Typography>Sat: 10am - 2pm</Typography>
          </Box>
        </Box>
      </Stack>
      <Box mt={20} width={800} height={300}>
        <iframe
          title="Zaph Tours Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255282.32335424496!2d36.84739685!3d-1.3032089500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1751827057568!5m2!1sen!2ske" // Replace with actual map embed link
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;
