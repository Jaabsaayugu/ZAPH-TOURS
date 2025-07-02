import { Box } from "@mui/material";
import HeroSection from "../components/heroSection";
import About from "../components/about";
import FeaturedDestinations from "../components/featuredDestination";
import Testimonials from "../components/testimonials";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <HeroSection />
      <About />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default Home;
