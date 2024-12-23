import AboutUs from "@/containers/aboutUs";
import Footer from "@/containers/footer";
import Gallery from "@/containers/gallery";
import Navbar from "@/containers/navbar";
import OurServices from "@/containers/ourServices";
import Reviews from "@/containers/reviews";
import Thumbnail from "@/containers/thumbnail";

export default function Home() {
  return (
    <>
      <Navbar />
      <Thumbnail />
      <AboutUs />
      <OurServices />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  );
}
